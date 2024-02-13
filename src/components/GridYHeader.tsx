const GridYHeader = ({ name }: {
    name: string,
}) => {

    return (
        <div style={{ height: 200, width: 100, writingMode: 'vertical-lr' }}
             className="border-solid border border-black bg-stone-800 flex justify-center items-center">
            <h1 className="text-3xl">{name}</h1>
        </div>
    )
}

export default GridYHeader;