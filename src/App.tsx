import './App.css'
import * as React from "react";
import GridElement from "./components/GridElement";
import GridYHeader from "./components/GridYHeader";
import GridXHeader from "./components/GridXHeader";

function App() {

  const gridSize = 8;

  return (
    <>
        <div className='grid' style={{gridTemplateColumns: `repeat(${gridSize + 1}, minmax(0, auto))`}}>
            <div/>
            {[...Array(gridSize)].map((_, row) => (<GridYHeader />))}
            {[...Array(gridSize)].map((_, row) =>
                <>
                    <GridXHeader />
                    {[...Array(gridSize)].map((_, col) => (
                        <GridElement/>
                    ))}
                </>
            )}
        </div>
    </>
  )
}

export default App
