import React from "react";
import "./HomeProduct.scss";
import oneImage from "../../../assets/images/product/6.png";
import twoImage from "../../../assets/images/product/4.png";
import threeImage from "../../../assets/images/product/3.png"
import fourImage from "../../../assets/images/product/1.png"
import { Link } from "react-router-dom";
function HomeProduct() {
    const cards = [
        {
            title: "Model - CG025M (capacity-25kg/day)",
            description: 'A compact composting solution with a daily capacity of 25 kg, ideal for small-scale waste management.',
            image: oneImage,
            url: '/products'
        },
        {
            title: "Model - CG050M (capacity-50kg/day)",
            description:
                "Efficient and versatile, this model handles up to 50 kg of organic waste per day, perfect for medium-sized operations.",
            image: twoImage,
            url: '/products'
        },
        {
            title: "Model - CG0100M (capacity-100kg/day)",
            description:
                "Designed for larger needs, this system processes up to 100 kg of waste daily, ensuring sustainable waste management.",
            image: threeImage,
            url: '/products'
        },
        {
            title: "Model - CG0250M (capacity-250kg/day)",
            description:
                "A robust composting machine with a 250 kg/day capacity, suitable for large facilities and institutions.",
            image: fourImage,
            url: '/products'
        },
    ];

    return (
        <div className="card-grid-container">
            <h2 className="card-heading">OUR PRODUCT RANGE</h2>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <Link to={card.url} className="card-link-tag">
                            <img src={card.image} alt={card.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="card-button-box">
                <Link to='/products'>
                    <button className="card-button">More Products Range</button>
                </Link>
            </div>

        </div>
    );
}

export default HomeProduct;
