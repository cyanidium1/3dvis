// next & react components
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";

// icons
import { FaCube } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";

//custom components
import DGalery from "@/components/3DGalery/3DGalery";
import Container from "@/components/container";
import Footer from "@/components/footer";

// lib components
import ReactImageGallery from "react-image-gallery";
import Link from "next/link";



export default function Home() {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    const services = [
        {
            title: '3D Visualization',
            description: 'Our website offers comprehensive 3D visualization services for both interior and exterior spaces. Alongside these core services, we provide additional options such as static animation based on visualizations, 360-degree tours, and compatibility for VR headsets. Whether you\'re an interior designer, architect, real estate agent, or construction team, our services cater to professionals who require detailed and immersive representations of their projects.With a focus on high- quality rendering and interactive experiences, we aim to elevate the presentation of architectural and design concepts to a new level of realism and engagement.',
            image: '/images/portfolio/bathroom.jpg'
        },
        {
            title: 'Furniture design',
            description: 'For those tackling home renovations independently, our platform specializes in furniture design projects, particularly focusing on kitchens. Our service revolves around providing detailed projects, visualizations, and drawings—not physical furniture itself. Targeted towards homeowners who lack the budget for a designer or prefer a hands-on approach, our services offer invaluable insights into optimizing space and functionality. Whether it\'s planning the layout of cabinets and appliances or coordinating electrical, plumbing, and lighting fixtures, our expertise helps ensure a seamless integration of design and practicality for every kitchen project.',
            image: '/images/portfolio/kitchen.jpg'
        },
        {
            title: 'Interior design',
            description: 'While our focus primarily lies in 3D visualization and furniture design, we also recognize the importance of interior design services. Though more challenging to execute remotely, our team is equipped to handle various interior design projects, from residential to commercial spaces. While we may not offer author supervision at present, our commitment to delivering exceptional design solutions remains unwavering. Whether it\'s conceptualizing cohesive color schemes, selecting furniture and decor, or optimizing spatial layouts, our interior design services aim to transform spaces into aesthetically pleasing and functional environments.',
            image: '/images/portfolio/cabinet.jpg'
        }
    ];


    return (
        <Layout>
            <Head>
                <title>3DGrapher</title>
            </Head>
            <main>
                {/* 360 gallery */}
                <DGalery />
                <section className="h-screen flex justify-center pb-8 md:pb-0 items-end md:items-center relative ">
                    <Container>
                        <div className="w-full">
                            <div className="mx-auto md:mx-0 w-fit  bg-dark-brown bg-opacity-50 p-4 md:p-6">
                                <h2 className="playFairFont text-5xl md:text-8xl my-1 md:my-0 text-white">3D Grapher</h2>
                                <p className="font-extralight text-xs md:text-2xl uppercase tracking-widest flex items-center text-white my-4">Interior Design. <br /> Visualizing Dreams. <br /> Creating art.</p>
                                <div className='md:flex md:space-x-2 space-y-2 md:space-y-0'>
                                    <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4  w-full md:w-fit">Portfolio</button>
                                    <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4  w-full md:w-fit">Contact</button>
                                </div>
                            </div>
                        </div>

                    </Container>
                </section>
                {/* 
                <section className="bg-gradient-to-b from-transparent via-black via-20% to-black">
                    <Container>
                        <div className="md:flex md:space-x-10">
                            <div className="h-full flex flex-col justify-between">
                                <p className="mt-20 font-extralight text-lg uppercase tracking-widest flex items-center">
                                    <SiApache className="mr-2" /> Who am i
                                </p>
                                <h3 className="playFairFont text-4xl md:text-6xl my-4">
                                    Your <span className="italic">best</span> designer ever
                                </h3>
                                <p className="font-extralight my-3">
                                    My name is Helena Karaliok, and I've been working as an interior designer for over 10 years now. I've catered to clients ranging from homeowners to large real estate companies. My main objective is to visualize your living space virtually, devise designs, and make adjustments as needed. Additionally, I specialize in furniture and exterior designs. You can read more about my journey as a CG Artist below.
                                </p>
                                <div className="space-x-4 mt-4 md:mb-0 hidden md:block ">
                                    <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 ">
                                        get in touch
                                    </button>
                                    <button className="justify-center hover:text-light-brown hover:shadow-lg duration-300 text-brown text-center uppercase px-6 py-4" style={{ boxShadow: "inset -1px -1px rgba(76, 64, 55, .25)" }}>
                                        about me
                                    </button>
                                </div>
                            </div>
                            <Image
                                className="rounded-full mx-auto"
                                src="/images/about/hero.jpg"
                                height={400}
                                width={400}
                                alt="1st image"
                            />
                        </div>
                    </Container>
                </section>

                <section className="bg-black">
                    <Container>
                        <div className="">
                            <p className="mt-20 font-extralight text-lg uppercase tracking-widest flex items-center">
                                <FaFileCode className="mr-2" /> Services
                            </p>
                            <h3 className="playFairFont text-4xl md:text-6xl mt-4 mb-6">
                                What I can offer to you
                            </h3>
                        </div>

                        <div className="md:flex justify-between space-y-8 md:space-y-0">
                            {services.map((data, index) => (
                                <div className="w-fit md:mx-2" key={index}>
                                    <Image
                                        className="w-full"
                                        src={data.image}
                                        height={400}
                                        width={400}
                                        alt={`Image ${index + 1}`}
                                    />
                                    <div className="flex items-start justify-between my-2">
                                        <p className="my-3 font-extralight text-lg uppercase tracking-widest flex items-center">
                                            0{index + 1}.
                                        </p>
                                        <h3 className="playFairFont text-4xl mb-3 md:my-0">
                                            {data.title}
                                        </h3>
                                    </div>
                                    <p className="font-extralight">
                                        {data.description}
                                    </p>
                                    <div className="mt-4 flex justify-center">
                                        <button className="btn justify-center bg-brown text-white text-center uppercase px-6 py-4 ">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                <section className="bg-black">
                    <Container>
                        <div className="md:flex md:space-x-4">
                            <div className=" md:w-2/5">
                                <p className=" font-extralight text-lg uppercase tracking-widest flex items-center">
                                    <FaCube className="mr-2" /> Portfolio
                                </p>
                                <h3 className="playFairFont text-4xl md:text-6xl mt-4 mb-6">
                                    My showroom
                                </h3>
                                <p className="font-extralight mb-6">
                                    I suggest you take a look at my latest works. Each project for me is an opportunity to create not just a design, but a small piece of art. Creativity is my main strength! I invite you to visit my showroom to explore the full collection of my works.
                                </p>
                                <div className="hidden md:block">
                                    <Link className=" hover:text-white duration-300 btn justify-center bg-brown text-white text-center uppercase px-6 py-4 mt-4" href='/portfolio'>
                                        <p>Explore showroom</p>
                                    </Link>
                                </div>
                            </div>
                            <ReactImageGallery items={images} />
                            <Link className="block md:hidden  hover:text-white duration-300 btn justify-center bg-brown text-white text-center uppercase px-6 py-4 mt-4" href='/portfolio'>
                                <p>Explore showroom</p>
                            </Link>
                        </div>
                    </Container>
                </section> */}
            </main>
            {/* <Footer /> */}
        </Layout>
    );
}