import {useState} from "react";


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

type CardStats = {
    winrate: string,
    wins_against: number,
    losses_against: number,
    games: number,
    winrate_value: number
}

const GridElement = ({ data, advancedStats }: {
    data: CardStats
    advancedStats: boolean
}) => {
    const { winrate_value = 0, winrate = 0, wins_against = 0, losses_against = 0, games = 0 } = data || {};

    return (
        <div style={{ height: 100, width: 100,
            backgroundColor: getColor(winrate_value * 100) }}
             className="border-solid border border-black bg-stone-800 flex justify-center items-center ease-in-out duration-100 flex-col"
        >
            {
                advancedStats ? <>
                    <h1 className="text-xs text-black font-bold">WR: {winrate}</h1>
                    <h1 className="text-xs text-black font-bold">Wins: {wins_against}</h1>
                    <h1 className="text-xs text-black font-bold">Losses: {losses_against}</h1>
                    <h1 className="text-xs text-black font-bold">Games: {games}</h1>
                </>
                    :

                    <h1 className="text-2xl text-black font-bold">{winrate}</h1>
            }
        </div>
    )
}

export default GridElement;
