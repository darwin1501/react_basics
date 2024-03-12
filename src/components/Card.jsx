function Card(props){
    console.log(props)
    return(
        <h1>
            This is Card {props.number}
            <p>Hello {props.name}</p>
            <p>I&apos;am {props.age} years old</p>
        </h1>
    )
}

export default Card