import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slider.css';

interface PhotoSliderProps {
    photos: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
    };

    return (
        <div className="slider-container">
            <div className="side-image left"></div>
            <Slider {...settings} className="main-slider">
                {photos.map((photo, index) => (
                    <div key={index}>
                        <img src={photo} alt={`slide-${index}`} />
                    </div>
                ))}
            </Slider>
            <div className="side-image right"></div>
        </div>
    );
};

export default PhotoSlider;
