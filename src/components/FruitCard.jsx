function FruitCard({name, color, taste}){

    return(
        <>
            <div className="card">
                <h2>
                    Fruit: {name}
                </h2>
                <h2>
                    Color: {color}
                </h2>
                <h2>
                    Taste: {taste}
                </h2>
            </div>
        </>
    )
}

export default FruitCard