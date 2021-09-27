import React from "react";
import styles from "./Carousel.module.css";
import imageTest from "../../assets/coverSearchForm.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselComp = ({title,data}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="my-16 mx-64">
            <h1 className="text-3xl">{title}</h1>

            <Carousel responsive={responsive}
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      swipeable={false}
                      draggable={false}
                      showDots={false}
            >
                <div className="mx-auto px-4 py-8 max-w-xl ">
                    <a href="/" className="text-xl">
                    <div className="bg-white rounded-lg hover:shadow-2xl tracking-wide">
                        <div className="md:flex-shrink-0">
                            <img src={imageTest} className="w-full h-64 rounded-lg rounded-b-none"/>
                        </div>
                        <div className="px-4 py-2 mt-2">
                            <p className="text-gray-600 ">Pizzeria</p>
                            <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                            <p className="text-gray-600">59600 Maubeuge</p>
                            <p className="text-gray-600">Prix moyens: 30€</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="mx-auto px-4 py-8 max-w-xl ">
                    <a href="/" className="text-xl">
                        <div className="bg-white rounded-lg hover:shadow-2xl tracking-wide">
                            <div className="md:flex-shrink-0">
                                <img src={imageTest} className="w-full h-64 rounded-lg rounded-b-none"/>
                            </div>
                            <div className="px-4 py-2 mt-2">
                                <p className="text-gray-600 ">Pizzeria</p>
                                <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                                <p className="text-gray-600">59600 Maubeuge</p>
                                <p className="text-gray-600">Prix moyens: 30€</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="mx-auto px-4 py-8 max-w-xl ">
                    <a href="/" className="text-xl">
                        <div className="bg-white rounded-lg hover:shadow-2xl tracking-wide">
                            <div className="md:flex-shrink-0">
                                <img src={imageTest} className="w-full h-64 rounded-lg rounded-b-none"/>
                            </div>
                            <div className="px-4 py-2 mt-2">
                                <p className="text-gray-600 ">Pizzeria</p>
                                <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                                <p className="text-gray-600">59600 Maubeuge</p>
                                <p className="text-gray-600">Prix moyens: 30€</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="mx-auto px-4 py-8 max-w-xl ">
                    <a href="/" className="text-xl">
                        <div className="bg-white rounded-lg hover:shadow-2xl tracking-wide">
                            <div className="md:flex-shrink-0">
                                <img src={imageTest} className="w-full h-64 rounded-lg rounded-b-none"/>
                            </div>
                            <div className="px-4 py-2 mt-2">
                                <p className="text-gray-600 ">Pizzeria</p>
                                <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">Nom du restaurant</h2>
                                <p className="text-gray-600">59600 Maubeuge</p>
                                <p className="text-gray-600">Prix moyens: 30€</p>
                            </div>
                        </div>
                    </a>
                </div>
            </Carousel>

        </div>

    );
}

export default CarouselComp;