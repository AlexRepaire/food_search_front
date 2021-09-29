import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slide = [
    {
        url: '/images/restaurant.png',
        caption: 'Slide 1'
    },
    {
        url: '/images/client.jpg',
        caption: 'Slide 2'
    },
    {
        url: '/images/coverSearchForm.png',
        caption: 'Slide 3'
    },
];

const SliderRestaurant = () => {
    const [slideImages, setSlideImages] = useState(slide);


    return (
        <div className="slide-container w-6/12 ">
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
    );
};

export default SliderRestaurant;