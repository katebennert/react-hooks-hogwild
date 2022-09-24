import React from "react";

function Hog({ name, img, medal, specialty, greased, weight, onPiggyClick, showPigDetails }) {

    const details = (
        <div>
            <p>Specialty: {specialty}</p>
            <p>{(greased ? "GREASED" : "NOT GREASED") + " | " + weight + " lbs"}</p>
        </div>
    )

	return (
		<div className="pigTile" onClick={() => onPiggyClick(name)}>
            <div className="ui card">
                <div>
                    <img src={img} alt={name + "lookin' good"}/>
                </div>
                <div>
                    <h3>{name}</h3>
                    <div className="meta">
                        <span className="date"></span>
                    </div>
                    <div className="description">
                        {(showPigDetails === name) ? details : ""}
                    </div>
                </div>
                <div>
                    <p className="achievementText">
                        <i className="trophy icon"></i>
                        {"Highest Medal: " + medal}
                    </p>
                </div>
            </div>
        </div>
	
	);
};

export default Hog;