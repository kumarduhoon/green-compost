import React from "react";
import "./HomeRecycled.scss";
import meatFishPoultry from '../../../assets/images/home/meat_fish_poultry.png'
import vegetableAndFruitPeelsv from '../../../assets/images/home/vegetable_and_fruit_peelsv.jpg'
import animalManure from '../../../assets/images/home/animal_manure.jpg'
import bakeryItems from '../../../assets/images/home/bakery_items.jpg'
import eggShells from '../../../assets/images/home/egg_shells.jpg'
import fastFood from '../../../assets/images/home/fast_food.jpg'
import leavesAndGardeningWaste from '../../../assets/images/home/leaves_and_gardening_waste.jpg'
import leftoverFood from '../../../assets/images/home/leftover_food.jpg'
import AnimatedSection from "../../../Util/AnimatedSection";

const HomeRecycled = () => {
    const items = [
        { id: 1, src: leavesAndGardeningWaste, alt: "Dry leaves", name: "Dry Leaves" },
        { id: 2, src: bakeryItems, alt: "Baked goods", name: "Baked Goods" },
        { id: 3, src: fastFood, alt: "Fried food", name: "Fast Food" },
        { id: 4, src: eggShells, alt: "Egg shells", name: "Egg Shells" },
        { id: 5, src: animalManure, alt: "Animal manure", name: "Animal Manure" },
        { id: 6, src: leftoverFood, alt: "Food leftovers", name: "Food Leftovers" },
        { id: 7, src: meatFishPoultry, alt: "Meat and fish scraps", name: "Meat & Fish Scraps" },
        { id: 8, src: vegetableAndFruitPeelsv, alt: "Vegetable peels", name: "Vegetable Peels" },
    ];

    return (

        <div className="banner">
            <h2 className="banner__title">
                What <span className="banner__highlight">can be Recycled</span>
            </h2>
            <div className="banner__grid">
                {items.map((item) => (
                    <div key={item.id} className="banner__item">
                        <AnimatedSection>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="banner__image"
                                loading="lazy"
                            />
                        </AnimatedSection>
                        <p className="banner__name">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeRecycled;
