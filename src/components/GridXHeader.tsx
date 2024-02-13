import * as React from "react";
import GridElement from "./GridElement";

const GridXHeader = () => {

    return (
        <div style={{ height: 100, width: 300 }}
             className="border-solid border border-sky-500 bg-stone-800 flex justify-between">
            <h1 className="text-3xl flex ml-1 justify-center items-center">Some Person</h1>
            <GridElement />
        </div>
    )
}

export default GridXHeader;