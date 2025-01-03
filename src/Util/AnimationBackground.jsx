import React, { useEffect } from "react";
import "./AnimationBackground.scss"
import { TweenLite, TweenMax, Linear, Sine } from "gsap";

const AnimationBackground = () => {
    useEffect(() => {
        const container = document.getElementById("animation-container");
        const total = 30;
        const w = window.innerWidth;
        const h = window.innerHeight;

        const R = (min, max) => min + Math.random() * (max - min);

        for (let i = 0; i < total; i++) {
            const div = document.createElement("div");
            div.className = "dot";
            TweenLite.set(div, { x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
            container.appendChild(div);
            anim(div);
        }

        function anim(elm) {
            TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1 });
            TweenMax.to(elm, R(4, 8), {
                x: "+=100",
                rotationZ: R(0, 180),
                repeat: -1,
                yoyo: true,
                ease: Sine.easeInOut,
            });
            TweenMax.to(elm, R(2, 8), {
                rotationX: R(0, 360),
                rotationY: R(0, 360),
                repeat: -1,
                yoyo: true,
                ease: Sine.easeInOut,
            });
        }
        return () => {
            container.innerHTML = "";
        };
    }, []);

    return <div id="animation-container"></div>;
};

export default AnimationBackground;
