import "./cat_info_style.css"

export default function CatCard(props){
    const catInfo = props.catInfo
    // console.log(catInfo);
    return(
        <div className="cat-card">
            <img
                className="cat-img"
                src={catInfo.image_link} 
                alt="Girl in a jacket" 
                width="200" 
                height="auto" 
            />
            <div className="cat-description">
                <p>
                    <strong>Name: </strong> 
                    {catInfo.name}
                </p>
                <p>
                    <strong>Origin: </strong> 
                    {catInfo.origin}
                </p>
                <p>
                    <strong>Intelligence: </strong> 
                    {catInfo.intelligence}
                </p>
                <p>
                    <strong>Origin: </strong> 
                    {catInfo.origin}
                </p>
                <p>
                    <strong>Length: </strong> 
                    {catInfo.length}
                </p>
                <p>
                    <strong>Weigth: </strong> 
                    {catInfo.max_weight}
                </p>
                <p>
                    <strong>Max Life Expectancy: </strong> 
                    {catInfo.max_life_expectancy}
                </p>
                <p>
                    <strong>Minimum Life Expectancy: </strong> 
                    {catInfo.min_life_expectancy}
                </p>
            </div>
        </div>
    )
}