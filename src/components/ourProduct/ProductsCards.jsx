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
        { id: 1, imgSrc: MachineOne, heading: "MODEL GC0025M", subHeading: 'Capacity : 25kg/day', description: 'A compact composting solution with a daily capacity of 25 kg, ideal for small-scale waste management.' },
        { id: 2, imgSrc: MachineTwo, heading: "MODEL GC0050M", subHeading: 'Capacity : 50kg/day', description: 'Efficient and versatile, this model handles up to 50 kg of organic waste per day, perfect for medium-sized operations.' },
        { id: 3, imgSrc: MachineThree, heading: "MODEL GC0100M", subHeading: 'Capacity : 100kg/day', description: 'Designed for larger needs, this system processes up to 100 kg of waste daily, ensuring sustainable waste management.' },
        { id: 4, imgSrc: MachineFour, heading: "MODEL GC0250M", subHeading: 'Capacity : 250kg/day', description: 'A robust composting machine with a 250 kg/day capacity, suitable for large facilities and institutions.' },
        { id: 5, imgSrc: MachineFive, heading: "MODEL GC0500M", subHeading: 'Capacity : 500kg/day', description: 'High-capacity composting with a 500 kg/day limit, tailored for industrial-scale waste management.' },
        { id: 6, imgSrc: MachineSix, heading: "MODEL GC1000M", subHeading: 'Capacity : 1000kg/day', description: 'A powerhouse composter capable of processing 1000 kg/day, designed for maximum efficiency in large-scale operations.' },
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
                            <h2 className="card__text-con_heading">{card.heading}</h2>
                            <h5 className="card__text-con_subHeading">{card.subHeading}</h5>
                            <p className="card__text-con_text">{card.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsCards;
