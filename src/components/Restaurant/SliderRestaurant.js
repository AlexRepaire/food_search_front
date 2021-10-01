import React, {useState} from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const SliderRestaurant = ({slideData}) => {
    const [slideImages, setSlideImages] = useState(slideData);


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