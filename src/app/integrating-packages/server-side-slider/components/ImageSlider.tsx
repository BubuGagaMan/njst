// use client is needed for the slider - but this will force out component into being a client component
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

export function ImageSlider() {
    const settings = {
        dots: true,
    }
    return (
        <div className="image-slider-container">
            <h1>Slide this shit using mouse...</h1>
            <Slider {...settings}>
                <div>
                    <img src="https://i.ytimg.com/vi/YDj3JHtIviQ/maxresdefault.jpg" />
                </div>
                <div>
                    <img src="https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t1080x1080.jpg" />
                </div>
            </Slider>
        </div>
    );
}
