import React from "react";
import Slider from "react-slick";
import "./HomeProduct.scss";
import oneImage from "../../../assets/images/home/one.png";
import twoImage from "../../../assets/images/home/two.png";
import threeImage from "../../../assets/images/home/three.png"
import fourImage from "../../../assets/images/home/four.png"
import backgroundImage from "../../../assets/images/home/sliderBackGround.png"

const NextArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow-facility next-arrow-facility" onClick={onClick}>
            ➡
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="custom-arrow-facility prev-arrow-facility" onClick={onClick}>
            ⬅
        </div>
    );
};

function HomeProduct() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        cssEase: "ease-in-out",
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const slides = [
        {
            id: 1,
            image: oneImage,
            title: "MODEL GC1000A",
            capacity: "Capacity: 1000 Kg/day",
        },
        {
            id: 2,
            image: twoImage,
            title: "MODEL GC0500A",
            capacity: "Capacity: 500 Kg/day",
        },
        {
            id: 3,
            image: threeImage,
            title: "MODEL GC0250A",
            capacity: "Capacity: 250 Kg/day",
        },
        {
            id: 4,
            image: fourImage,
            title: "MODEL GC0100A",
            capacity: "Capacity: 100 Kg/day",
        },
    ];

    return (
        <div
            className="product-slider"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="product-slider__content">
                <h1 className="product-slider__heading">OUR PRODUCT RANGE</h1>
                <div className="our-facilities-main-con">
                    <Slider {...settings}>
                        {slides.map((item, index) => (
                            <div key={index} className="p-4">
                                <FlipCard item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

const FlipCard = ({ item }) => {
    return (
        <div className="main-con">
            <img src={item.image} alt={item.title} className="card-img-card" />
            <div className="facility-card-head">{item.title}</div>
            <div className="facility-card-text">{item.capacity}</div>
        </div>
    );
};


export default HomeProduct;
