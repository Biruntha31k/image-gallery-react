import React from 'react';
import one from "../assets/images/one.jpeg";
import two from "../assets/images/two.jpeg";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.jpeg";
import five from "../assets/images/five.jpg";
import six from "../assets/images/six.jpeg";
import seven from "../assets/images/seven.jpg"
import eight from "../assets/images/eight.jpeg";
import nine from "../assets/images/nine.jpg"
import ten from "../assets/images/ten.jpeg"

function Container() {
    return (
        <div className="container">
            <div className="image__container">
                <img src={one} alt="dog" />
                <h2>Golden Retriever</h2>
            </div>
            <div className="image__container">
                <img src={two} alt="dog" />
                <h2>White with tulip</h2>
            </div>
            <div className="image__container">
                <img src={three} alt="dog" />
                <h2>Cutie Gold</h2>
            </div>
            <div className="image__container">
                <img src={four} alt="dog" />
                <h2>Superman</h2>
            </div>
            <div className="image__container">
                <img src={five} alt="dog" />
                <h2>Gold in Garden</h2>
            </div>
            <div className="image__container">
                <img src={six} alt="dog" />
                <h2>Sleepy Head</h2>
            </div>
            <div className="image__container">
                <img src={seven} alt="dog" />
                <h2>Snow White</h2>
            </div>
            <div className="image__container">
                <img src={eight} alt="dog" />
                <h2>Charm White</h2>
            </div>
            <div className="image__container">
                <img src={nine} alt="dog" />
                <h2>Player Boy</h2>
            </div>
            <div className="image__container">
                <img src={ten} alt="dog" />
                <h2>Soulmates</h2>
            </div>
        </div>
    );
}

export default Container;
