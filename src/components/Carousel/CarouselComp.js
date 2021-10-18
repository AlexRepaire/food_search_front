import React from "react";
import styles from "./Carousel.module.css";
import imageTest from "../../assets/coverSearchForm.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";

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
                {data.map((item,index)=>(
                    <div className="mx-auto px-4 py-8 max-w-xl ">
                        <Link to="/" className="text-xl">
                            <div className="bg-white rounded-lg hover:shadow-2xl tracking-wide">
                                <div className="md:flex-shrink-0">
                                    <img src={imageTest} className="w-full h-64 rounded-lg rounded-b-none" alt="photo du restaurant"/>
                                </div>
                                <div className="px-4 py-2 mt-2">
                                    <p className="text-gray-600 ">{item.fsSpecialiteByRestIdSpe.speType}</p>
                                    <h2 className="font-bold text-2xl text-gray-800 tracking-normal my-2">{item.restNom}</h2>
                                    <p className="text-gray-600">{item.fsAdresseByRestId.adrVille}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </Carousel>

        </div>

    );
}

export default CarouselComp;