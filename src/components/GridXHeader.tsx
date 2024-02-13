
const GridXHeader = ({ name }: {
    name: string
}) => {

    return (
        <div style={{ height: 100, width: 300 }}
             className="border-solid border border-black bg-stone-800 flex justify-center items-center">
            <h1 className="text-3xl flex ml-1 justify-center items-center">{name}</h1>
            {/*<GridElement />*/}
        </div>
    )
}

export default GridXHeader;