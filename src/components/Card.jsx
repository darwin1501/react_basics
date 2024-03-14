function Card(props){

    return(
        <>
            <div className="card">
                <h1>
                    This is Card {props.number}
                </h1>
            </div>
        </>
    )
}

export default Card