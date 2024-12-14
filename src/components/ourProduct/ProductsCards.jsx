import React, { useEffect } from "react";
import "./ProductsCards.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import machineThree from "../../assets/images/about/machineThree.png"
const ProductsCards = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
        });
    }, []);
    const cards = [
        { id: 1, imgSrc: machineThree },
        { id: 2, imgSrc: machineThree },
        { id: 3, imgSrc: machineThree },
        { id: 4, imgSrc: machineThree },
        { id: 5, imgSrc: machineThree },
    ];

    return (
        <div className="card-list">
            {cards.map((card) => (
                <div
                    data-aos="fade-zoom-in"
                    className="card" key={card.id}>
                    <img src={card.imgSrc} alt={`Card ${card.id}`} className="card__image" />
                    <div className="card__arrow"></div>
                </div>
            ))}
        </div>
    );
};

export default ProductsCards;
