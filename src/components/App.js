import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSortBar from "./FilterSortBar"
import hogs from "../porkers_data";

function App() {

	const [greasedCheck, setGreasedCheck] = useState(false); 
    const [sortType, setSortType] = useState("Sort Me!");

	return (
		<div className="App">
			<Nav />
			<FilterSortBar greasedCheck={greasedCheck} setGreasedCheck={setGreasedCheck} sortType={sortType} setSortType={setSortType} />
			<HogList hogData={hogs} greasedCheck={greasedCheck} sortType={sortType}/>
		</div>
	);
}

export default App;
