import React from "react";

import vidio from "../assets/vidio sawah.mp4"

const HeroComp = () => {
    return (
        <div className="hero">
            <div>
                <video className="w-100" src={vidio} autoPlay loop muted />
            </div>
        </div>
    );
};

export default HeroComp;
