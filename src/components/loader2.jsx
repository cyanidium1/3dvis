import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// import { debounce } from '@ykob/js-util';

// Utility functions
const Util = {
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    getDegree: function (radian) {
        return radian / Math.PI * 180;
    },
    getRadian: function (degrees) {
        return degrees * Math.PI / 180;
    },
    getPolarCoord: function (rad1, rad2, r) {
        const x = Math.cos(rad1) * Math.cos(rad2) * r;
        const z = Math.cos(rad1) * Math.sin(rad2) * r;
        const y = Math.sin(rad1) * r;
        return new THREE.Vector3(x, y, z);
    }
};

// Normalize Vector2
const normalizeVector2 = (vector) => {
    vector.x = (vector.x / document.body.clientWidth) * 2 - 1;
    vector.y = - (vector.y / window.innerHeight) * 2 + 1;
};

// Force3 class
class Force3 {
    constructor() {
        this.velocity = new THREE.Vector3();
        this.acceleration = new THREE.Vector3();
        this.anchor = new THREE.Vector3();
        this.mass = 1;
    }

    updateVelocity() {
        this.acceleration.divideScalar(this.mass);
        this.velocity.add(this.acceleration);
    }

    applyForce(vector) {
        this.acceleration.add(vector);
    }

    applyFriction(mu, normal = 1) {
        const force = this.acceleration.clone().multiplyScalar(-1).normalize().multiplyScalar(mu);
        this.applyForce(force);
    }

    applyDrag(value) {
        const force = this.acceleration.clone().multiplyScalar(-1).normalize().multiplyScalar(this.acceleration.length() * value);
        this.applyForce(force);
    }

    applyHook(rest_length, k) {
        const force = this.velocity.clone().sub(this.anchor);
        const distance = force.length() - rest_length;
        force.normalize().multiplyScalar(-1 * k * distance);
        this.applyForce(force);
    }
}

// ForceCamera class
class ForceCamera extends THREE.PerspectiveCamera {
    constructor(fov, aspect, near, far) {
        super(fov, aspect, near, far);
        this.force = {
            position: new Force3(),
            look: new Force3(),
        };
        this.up.set(0, 1, 0);
    }

    updatePosition() {
        this.position.copy(this.force.position.velocity);
    }

    updateLook() {
        this.lookAt(
            this.force.look.velocity.x,
            this.force.look.velocity.y,
            this.force.look.velocity.z
        );
    }

    reset() {
        this.setPolarCoord();
        this.lookAtCenter();
    }

    resize(width, height) {
        this.aspect = width / height;
        this.updateProjectionMatrix();
    }

    setPolarCoord(rad1, rad2, range) {
        this.force.position.anchor.copy(Util.getPolarCoord(rad1, rad2, range));
    }

    lookAtCenter() {
        this.lookAt(0, 0, 0);
    }
}

// ForceHemisphereLight class
class ForceHemisphereLight extends THREE.HemisphereLight {
    constructor(hex1, hex2, intensity) {
        super(hex1, hex2, intensity);
        this.force = new Force3();
    }

    updatePosition() {
        this.position.copy(this.force.velocity);
    }

    setPolarCoord(rad1, rad2, range) {
        this.position.copy(Util.getPolarCoord(rad1, rad2, range));
    }
}

const SketchComponent = () => {
    const canvasRef = useRef(null);
    const [pickedId, setPickedId] = useState(-1);
    const [pickedIndex, setPickedIndex] = useState(-1);
    const [isClicked, setIsClicked] = useState(false);
    const [isDragged, setIsDragged] = useState(false);
    const [getNear, setGetNear] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
        const scene = new THREE.Scene();
        const camera = new ForceCamera(35, window.innerWidth / window.innerHeight, 1, 10000);

        const imageGeometry = new THREE.PlaneGeometry(100, 100);
        const raycaster = new THREE.Raycaster();
        let light = null;

        class Image extends Force3 {
            constructor() {
                super();
                this.rad = 0;
                this.obj = null;
                this.is_entered = false;
            }

            init(vector) {
                const imageMaterial = new THREE.MeshPhongMaterial({
                    side: THREE.DoubleSide,
                    map: new THREE.TextureLoader().load(`../img/sketch/gallery/image0${Util.getRandomInt(1, 9)}.jpg`)
                });

                this.obj = new THREE.Mesh(imageGeometry, imageMaterial);
                this.velocity = vector.clone();
                this.anchor = vector.clone();
                this.acceleration.set(0, 0, 0);
            }
        }

        const initImages = () => {
            const imgArr = [];
            for (let i = 0; i < 300; i++) {
                const rad = Util.getRadian((i % 45) * 8 + 180);
                const radius = 1000;
                const x = Math.cos(rad) * radius;
                const y = i * 5 - 300 * 2.5;
                const z = Math.sin(rad) * radius;
                const vector = new THREE.Vector3(x, y, z);
                const image = new Image();
                image.init(new THREE.Vector3());
                image.rad = rad;
                image.obj.position.copy(vector);
                scene.add(image.obj);
                imgArr.push(image);
            }
            setImages(imgArr);
        };

        const pickImage = (vector) => {
            if (getNear) return;
            raycaster.setFromCamera(vector, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0 && !isDragged) {
                document.body.classList.add('is-pointed');
                setPickedId(intersects[0].object.id);
            } else {
                resetPickImage();
            }
        };

        const getNearImage = (image) => {
            setGetNear(true);
            camera.force.position.anchor.set(Math.cos(image.rad) * 780, image.obj.position.y, Math.sin(image.rad) * 780);
            camera.force.look.anchor.copy(image.obj.position);
            resetPickImage();
        };

        const resetPickImage = () => {
            document.body.classList.remove('is-pointed');
            setPickedId(-1);
        };

        const resizeWindow = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const render = () => {
            images.forEach((image, i) => {
                image.applyHook(0, 0.14);
                image.applyDrag(0.4);
                image.updateVelocity();
                image.obj.lookAt(0, image.obj.position.y, 0);
                if (image.obj.id === pickedId && !isDragged && !getNear) {
                    if (isClicked) {
                        setPickedIndex(i);
                    } else {
                        image.obj.material.color.set(0xaaaaaa);
                    }
                } else {
                    image.obj.material.color.set(0xffffff);
                }
            });
            camera.force.position.applyHook(0, 0.08);
            camera.force.position.applyDrag(0.4);
            camera.force.position.updateVelocity();
            camera.updatePosition();
            if (!getNear) {
                camera.force.look.anchor.copy(Util.getPolarCoord(camera.rotate_rad1, camera.rotate_rad2, 1000));
            }
            camera.force.look.applyHook(0, 0.08);
            camera.force.look.applyDrag(0.4);
            camera.force.look.updateVelocity();
            camera.updateLook();
            renderer.render(scene, camera);
        };

        const renderLoop = () => {
            render();
            requestAnimationFrame(renderLoop);
        };

        const handleResize = resizeWindow();


        const handleTouchStart = (x, y) => {
            const vectorTouchStart = new THREE.Vector2(x, y);
            normalizeVector2(vectorTouchStart);
            pickImage(vectorTouchStart);
            setIsClicked(true);
        };

        const handleTouchMove = (x, y) => {
            const vectorTouchMove = new THREE.Vector2(x, y);
            normalizeVector2(vectorTouchMove);
            pickImage(vectorTouchMove);
            if (isClicked && vectorTouchStart.clone().sub(vectorTouchMove).length() > 0.01) {
                setIsClicked(false);
                setIsDragged(true);
            }
            if (isDragged && !getNear) {
                camera.rotate_rad1 = camera.rotate_rad1_base + Util.getRadian((vectorTouchStart.y - vectorTouchMove.y) * 50);
                camera.rotate_rad2 = camera.rotate_rad2_base + Util.getRadian((vectorTouchStart.x - vectorTouchMove.x) * 50);
                if (camera.rotate_rad1 < Util.getRadian(-50)) {
                    camera.rotate_rad1 = Util.getRadian(-50);
                }
                if (camera.rotate_rad1 > Util.getRadian(50)) {
                    camera.rotate_rad1 = Util.getRadian(50);
                }
            }
        };

        const handleTouchEnd = (x, y) => {
            const vectorTouchEnd = new THREE.Vector2(x, y);
            resetPickImage();
            if (getNear) {
                camera.force.position.anchor.set(0, 0, 0);
                setPickedIndex(-1);
                setGetNear(false);
            } else if (isClicked && pickedIndex > -1) {
                getNearImage(images[pickedIndex]);
            } else if (isDragged) {
                camera.rotate_rad1_base = camera.rotate_rad1;
                camera.rotate_rad2_base = camera.rotate_rad2;
            }
            setIsClicked(false);
            setIsDragged(false);
        };

        const handleMouseOut = () => {
            resetPickImage();
            if (getNear) {
                camera.force.position.anchor.set(0, 0, 0);
                setPickedIndex(-1);
                setGetNear(false);
            } else if (isClicked && pickedIndex > -1) {
                getNearImage(images[pickedIndex]);
            } else if (isDragged) {
                camera.rotate_rad1_base = camera.rotate_rad1;
                camera.rotate_rad2_base = camera.rotate_rad2;
            }
            setIsClicked(false);
            setIsDragged(false);
        };

        initImages();
        light = new ForceHemisphereLight(0xffffff, 0xffffff, 1);
        scene.add(light);
        camera.force.position.anchor.set(0, 0, 0);
        camera.rotate_rad1 = Util.getRadian(-35);
        camera.rotate_rad1_base = camera.rotate_rad1;
        camera.rotate_rad2 = Util.getRadian(180);
        camera.rotate_rad2_base = camera.rotate_rad2;

        resizeWindow();
        renderLoop();

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousedown', (event) => handleTouchStart(event.clientX, event.clientY));
        canvas.addEventListener('mousemove', (event) => handleTouchMove(event.clientX, event.clientY));
        canvas.addEventListener('mouseup', (event) => handleTouchEnd(event.clientX, event.clientY));
        canvas.addEventListener('touchstart', (event) => handleTouchStart(event.touches[0].clientX, event.touches[0].clientY));
        canvas.addEventListener('touchmove', (event) => handleTouchMove(event.touches[0].clientX, event.touches[0].clientY));
        canvas.addEventListener('touchend', (event) => handleTouchEnd(event.changedTouches[0].clientX, event.changedTouches[0].clientY));
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousedown', (event) => handleTouchStart(event.clientX, event.clientY));
            canvas.removeEventListener('mousemove', (event) => handleTouchMove(event.clientX, event.clientY));
            canvas.removeEventListener('mouseup', (event) => handleTouchEnd(event.clientX, event.clientY));
            canvas.removeEventListener('touchstart', (event) => handleTouchStart(event.touches[0].clientX, event.touches[0].clientY));
            canvas.removeEventListener('touchmove', (event) => handleTouchMove(event.touches[0].clientX, event.touches[0].clientY));
            canvas.removeEventListener('touchend', (event) => handleTouchEnd(event.changedTouches[0].clientX, event.changedTouches[0].clientY));
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isClicked, isDragged, getNear, pickedId, pickedIndex, images]);

    return <canvas ref={canvasRef} className="p-canvas-webgl" id="canvas-webgl"></canvas>;
};

export default SketchComponent;
