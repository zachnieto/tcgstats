const GridYHeader = ({ name }: {
    name: string,
}) => {

    return (
        <div style={{ height: 200, width: 100, writingMode: 'vertical-lr', transform: 'skew(45deg)', transformOrigin: 'bottom center' }}
             className="border-solid border border-black bg-stone-800 flex justify-center items-center">
            <h1 className="text-2xl" style={{ transform: 'skew(-45deg) rotate(-45deg)' }}>{name}</h1>
        </div>
    )
}

export default GridYHeader;
