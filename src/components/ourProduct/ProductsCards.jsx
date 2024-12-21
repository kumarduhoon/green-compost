import React, { useEffect } from "react";
import "./ProductsCards.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import MachineOne from "../../assets/images/product/1.png"
import MachineTwo from "../../assets/images/product/2.png"
import MachineThree from "../../assets/images/product/3.png"
import MachineFour from "../../assets/images/product/4.png"
import MachineFive from "../../assets/images/product/5.png"
import MachineSix from "../../assets/images/product/6.png"

const ProductsCards = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
        });
    }, []);
    const cards = [
        { id: 1, imgSrc: MachineOne, text: "this is all about the image" },
        { id: 2, imgSrc: MachineTwo, text: "this is all about the image" },
        { id: 3, imgSrc: MachineThree, text: "this is all about the image" },
        { id: 4, imgSrc: MachineFour, text: "this is all about the image" },
        { id: 5, imgSrc: MachineFive, text: "this is all about the image" },
        { id: 6, imgSrc: MachineSix, text: "this is all about the image" },
    ];

    return (
        <div className="card-list">
            {cards.map((card) => (
                <div
                    data-aos="fade-zoom-in"
                    className="card" key={card.id}>
                    <img src={card.imgSrc} alt={`Card ${card.id}`} className="card__image" />
                    <div className="card__arrow">
                        <div className="card__text-con">
                            {card.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsCards;
