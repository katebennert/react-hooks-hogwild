import React, { useState } from "react";
import Hog from "./Hog";
import { v4 as uuidv4 } from 'uuid';

function HogList({ hogData, greased, sortType, greasedCheck }) {

    const [showPigDetails, setShowPigDetails] = useState("");
    const allPiggies = hogData.map(hog => <Hog key={uuidv4()} name={hog.name} img={hog.image} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog["highest medal achieved"]} onPiggyClick={onPiggyClick} showPigDetails={(showPigDetails === hog.name) ? showPigDetails : ""}/> );

    const sortedPiggiesAZ = [...allPiggies].sort(function (pigA, pigB) {
            if (pigA.props.name < pigB.props.name) {
                return -1;
            }
            if (pigA.props.name > pigB.props.name) {
                return 1;
            }
            return 0;
            });
    const sortedPiggiesLowHigh = [...allPiggies].sort(function (pigA, pigB) {
        if (pigA.props.weight < pigB.props.weight) {
            return -1;
        }
        if (pigA.props.weight > pigB.props.weight) {
            return 1;
        }
        return 0;
        });

    const sortedPiggiesZA = [...sortedPiggiesAZ].reverse();
    const sortedPiggiesHighLow = [...sortedPiggiesLowHigh].reverse();
    let sortedPiggies = [];

    switch(sortType) {
        case "nameAZ":
          sortedPiggies = sortedPiggiesAZ;
          break;
        case "nameZA":
          sortedPiggies = sortedPiggiesZA;
          break;
        case "weightHighLow":
          sortedPiggies = sortedPiggiesHighLow;
          break;
        case "weightLowHigh":
          sortedPiggies = sortedPiggiesLowHigh;
          break;
        default:
          sortedPiggies = allPiggies;
      }
    
    
    const piggiesToShow = greasedCheck ? sortedPiggies.filter(pig => pig.props.greased === true) : allPiggies;

    

    function onPiggyClick(name) {
        setShowPigDetails(name);
    }

	return (
		<div className="ui grid container">
			{greasedCheck ? piggiesToShow : sortedPiggies} 
		</div>
	);
};

export default HogList;