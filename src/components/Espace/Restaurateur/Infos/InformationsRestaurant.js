import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const InformationsRestaurant = () => {

    const slide = [
        {
            url: '/images/plat1.jpg',
            caption: 'Slide 1'
        },
        {
            url: '/images/plat2.jpg',
            caption: 'Slide 2'
        },
        {
            url: '/images/plat3.jpg',
            caption: 'Slide 3'
        },
        {
            url: '/images/plat4.jpg',
            caption: 'Slide 4'
        },
    ];

        const [slideImages, setSlideImages] = useState(slide);

        return (
                <div className="bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none justify-center">

                            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 ">
                                <div className="group relative">
                                    <div
                                        className="relative w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-40 lg:aspect-w-1 lg:aspect-h-1">
                                        <ul className="ml-4 mt-4">
                                            <li >Nom du restaurant :</li>
                                            <li>Adresse du restaurant :</li>
                                            <li>Code postale - Ville</li>
                                            <li>Mail : </li>
                                            <li>Numéro du téléphone :</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div
                                        className="relative w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-40 lg:aspect-w-1 lg:aspect-h-1">
                                        <Slide>
                                            {slideImages.map((slideImage, index)=> (
                                                <div className="each-slide" key={index}>
                                                    <div>
                                                        <img src={slideImage.url} alt=""/>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slide>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


        );
};

export default InformationsRestaurant;
