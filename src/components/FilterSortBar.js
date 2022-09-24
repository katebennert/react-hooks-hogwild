import React from "react";

function FilterSortBar({ greased, sortType, setSortType, setGreasedCheck}) {
 
    return (
    <div>
        <label>
        Show greased hogs only!
        <input
            type="checkbox"
            id="greased"
            checked={greased}
            onChange={(e) => setGreasedCheck(e.target.checked)}
        />
        </label>

        <label htmlFor="sort">Sort by: </label>
            <select
                id="sort"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
            >
                <option value="Sort Me!">Sort Me!</option>
                <option value="nameAZ">Name A → Z</option>
                <option value="nameZA">Name Z → A </option>
                <option value="weightHighLow">Weight High → Low</option>
                <option value="weightLowHigh">Weight Low → High</option>
            </select>
    </div>
  );
};

export default FilterSortBar;