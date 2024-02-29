import './App.css'
import GridElement from "./components/GridElement";
import GridYHeader from "./components/GridYHeader";
import GridXHeader from "./components/GridXHeader";
import {useEffect, useState} from "react";
import _ from "lodash";

function App() {

    const windows = ['last-week', 'last-2-weeks', 'last-month', 'last-3-months'];
    const [window, setWindow] = useState('last-week');
    const [stats, setStats] = useState({});
    const [decks, setDecks] = useState([]);
    const [advancedStats, setAdvancedStats] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.neatqueue.com/tcgstats');
                const data: {stats: object, decks: string[]} = await response.json();
                setStats(data.stats || {});
                setDecks(data.decks || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [window]);

  return (
    <>
        <nav className="p-4">
            <div className="flex justify-center items-center">
                <div className="flex space-x-4">
                    {windows.map((w) =>
                        <button
                            className="text-white hover:text-gray-300"
                            onClick={() => setWindow(w)}
                        >
                            {_.startCase(w)}
                        </button>
                    )}
                    <button onClick={() => setAdvancedStats(!advancedStats)}>
                        Switch To {advancedStats ? 'Simple' : 'Advanced'} Stats
                    </button>
                </div>
            </div>
        </nav>
        <div className='grid' style={{gridTemplateColumns: `repeat(${decks.length + 1}, minmax(0, auto))`}}>
            <div/>
            {decks.map((card) => (<GridYHeader name={card}/>))}
            {decks.map((card) =>
                <>
                    <GridXHeader name={card}/>
                    {decks.map((otherCard) => (
                        <>
                            <GridElement data={stats[window][card]["matchups"][otherCard]} advancedStats={advancedStats}/>
                        </>
                    ))}
                </>
            )}
        </div>
    </>
  )
}

export default App
