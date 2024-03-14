import styles from "./style.module.css";
import productData from "../../../products.json";
import Product from "../../../components/Product/Product";

export default function ProductList(){
    const productList = productData.map((product)=>{
        return (<Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    picture={product.picture}
                />)
    })
    
    return(
        <>
        <div className={styles.header}>
            <h1 style={{textAlign: "center", fontSize: "40px"}}>PeeSho</h1>
        </div>
            <div className={styles.product_list_container}>
                <div className={styles.product_list_content}>
                    {productList}
                </div>
            </div>
        </>
    )
}