import React from 'react';
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FlipMove from 'react-flip-move';


// Import Swiper styles
import 'swiper/swiper.scss';

function Test() {
    const customLeaveAnimation = {
        from: { transform: 'scale(1, 1)' },
        to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
    };
    return (
        <FlipMove enterAnimation={customLeaveAnimation}>
        {["Hello", "How are you?"].map(article => (
            <div key={article.id}>{article}</div>
            ))}
        </FlipMove>
    )
}

export default Test
