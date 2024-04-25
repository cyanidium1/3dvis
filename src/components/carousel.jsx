import { useState, useRef } from "react";
import './carousel.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import db from '../db/portfolio.json';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? db.length - 1 : prevIndex - 1));
        sliderRef.current.prepend(sliderRef.current.lastChild);
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === db.length - 1 ? 0 : prevIndex + 1));
        sliderRef.current.append(sliderRef.current.firstChild);
    };

    return (
        <div className="animBox h-screen overflow-hidden">
            <div className="slider" ref={sliderRef}>
                {db.map((el, index) => (
                    <div className={`item ${index === activeIndex ? "active" : ""}`} key={index}>
                        <img className="carousel-photo" src={el.mainPhoto} loading="eager" alt="" />
                        <div className="content w-[40vw] md:w-96 left-2 md:left-8  bg-dark-brown bg-opacity-50 p-2 md:p-6">
                            <h2 className="playFairFont text-xl md:text-5xl my-1 md:my-0">{el.title}</h2>
                            <p className="font-extralight text-xs md:text-lg uppercase tracking-widest flex items-center">{el.description}</p>
                            <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 text-xs w-full md:w-fit">Read more</button>
                        </div>
                    </div>
                ))}
            </div>
            <nav className="nav">
                <button onClick={handlePrevClick} className="btn prev" name="arrow-back-outline"><SlArrowLeft /></button>
                <button onClick={handleNextClick} className="btn next" name="arrow-forward-outline"><SlArrowRight /></button>
            </nav>
        </div>
    );
};

export default Carousel;
