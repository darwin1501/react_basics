import styles from "./style.module.css"
// import Image from "next/image"

export default function Product(props){ 
    const imgStyle = {
        objectFit: "contain",
        borderRadius: "10px"
    }
 
    return (
        <div className={styles.card}>
            <div className={styles.img_container}>
                <img 
                    src={props.picture} 
                    style={imgStyle} 
                    alt="productImg"
                    width={200}
                    height={200}
                />
            </div>  
            <h3>{props.name}</h3>
            <h2>{props.price} Pesos</h2>
        </div>
    )
}

