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

const GridElement = ({ data }: {
    data: CardStats
}) => {
    const [expanded, setExpanded] = useState(false)

    console.log(data);

    return (
        <div style={{ height: 100, width: 100, transform: expanded ? `scale(1.5)` : '',
            backgroundColor: getColor(data["winrate_value"] * 100) }}
             className="border-solid border border-black bg-stone-800 flex justify-center items-center ease-in-out duration-100 cursor-pointer flex-col"
            onMouseEnter={() => setExpanded(true)}
             onMouseLeave={() => setExpanded(false)}
        >
            {
                expanded ? <>
                    <h1 className="text-xs text-black font-bold">WR: {data["winrate"]}</h1>
                    <h1 className="text-xs text-black font-bold">Wins: {data["wins_against"]}</h1>
                    <h1 className="text-xs text-black font-bold">Losses: {data["losses_against"]}</h1>
                    <h1 className="text-xs text-black font-bold">Games: {data["games"]}</h1>
                </>
                    :

                    <h1 className="text-2xl text-black font-bold">{data["winrate"]}</h1>
            }
        </div>
    )
}

export default GridElement;