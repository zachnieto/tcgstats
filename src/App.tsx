import './App.css'
import GridElement from "./components/GridElement";
import GridYHeader from "./components/GridYHeader";
import GridXHeader from "./components/GridXHeader";
import data from "./output.json";

function App() {

  const cards = ["OP05 Monkey D Luffy", "OP05 Enel", "OP05 Sakazuki", "ST10 Trafalgar Law", "OP03 Charlotte Katakuri", "OP02 Edward Newgate", "OP01 Roronoa Zoro", "ST10 Monkey D Luffy"]

  return (
    <>
        {console.log(data["OP05 Monkey D Luffy"])}
        <div className='grid' style={{gridTemplateColumns: `repeat(${cards.length + 1}, minmax(0, auto))`}}>
            <div/>
            {cards.map((card) => (<GridYHeader name={card}/>))}
            {cards.map((card) =>
                <>
                    <GridXHeader name={card}/>
                    {cards.map((otherCard) => (
                        <GridElement data={data[card]["matchups"][otherCard]}/>
                    ))}
                </>
            )}
        </div>
    </>
  )
}

export default App
