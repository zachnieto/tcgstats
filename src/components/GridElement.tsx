import * as React from "react";


const getColor = (value: number) => {
    // Clamp the value between 0 and 100
    const clampedValue = Math.min(100, Math.max(0, value));

    // Calculate the RGB values for red, white, and green
    const redRGB = [255, 0, 0];
    const whiteRGB = [255, 255, 255];
    const greenRGB = [0, 255, 0];

    // Calculate the blended RGB values based on the given value
    let blendedRGB: number[];
    if (clampedValue <= 50) {
        blendedRGB = redRGB.map((red, index) =>
            Math.round((1 - clampedValue / 50) * red + (clampedValue / 50) * whiteRGB[index])
        );
    } else {
        blendedRGB = whiteRGB.map((white, index) =>
            Math.round(((clampedValue - 50) / 50) * greenRGB[index] + (1 - (clampedValue - 50) / 50) * white)
        );
    }

    // Convert the blended RGB values to a CSS color string
    return `rgb(${blendedRGB[0]}, ${blendedRGB[1]}, ${blendedRGB[2]})`;
}


const GridElement = () => {

    const percentage = Math.random() * 100;

    return (
        <div style={{ height: 100, width: 100, backgroundColor: getColor(percentage) }}
             className="border-solid border border-sky-500 bg-stone-800 flex justify-center items-center">
            <h1 className="text-3xl text-black font-bold">{percentage.toFixed(1)}%</h1>
        </div>
    )
}

export default GridElement;