import { Container } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useCart } from "../context/CartContext"

function ItemDetail({ item }) {

    const { cart } = useCart()

    

    return  (    
        <Container>
            <img src={item?.image} alt={item?.name} />
            <h2>{item?.name}</h2>
            <p>{item?.description}</p>
            <p>${item?.price}</p>
            <ItemCount item={item}></ItemCount>
        </Container>
    )
}
export default ItemDetail