import React from "react";
import "./HomeProduct.scss";
import oneImage from "../../../assets/images/home/one.png";
import twoImage from "../../../assets/images/home/two.png";
import threeImage from "../../../assets/images/home/three.png"
import fourImage from "../../../assets/images/home/four.png"


function HomeProduct() {
    const cards = [
        {
            title: "Monstera Leaves: Care, Healthy Growth, and Fertilization Tips",
            description:
                "Discover essential tips for Monstera leaves care, including how to promote healthy growth and the best fertilization practices to keep your plant thriving.",
            image: oneImage,
        },
        {
            title: "How To Garden?",
            description:
                "Ready to start gardening? Discover essential gardening tips, soil selection, and plant care techniques perfect for beginners.",
            image: twoImage,
        },
        {
            title: "Citrus: Plant, Grow, & Care for Gardening",
            description:
                "Learn how to plant, grow, and care for citrus trees while composting for healthier soil and better fruit production.",
            image: threeImage,
        },
        {
            title: "Indoor Plants: Benefits and Tips",
            description:
                "Explore the benefits of indoor plants and get practical tips for incorporating greenery into your home.",
            image: fourImage,
        },
    ];

    return (
        <div className="card-grid-container">
            <div className="card-grid">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeProduct;
