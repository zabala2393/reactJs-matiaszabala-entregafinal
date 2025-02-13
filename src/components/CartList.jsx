import { ListGroupItem, ListGroup, Button } from "react-bootstrap"
import { useCart } from "../context/CartContext"

function CartList(item) {

    const { cart, clearCart, takeOffCart } = useCart() 

    return (

        <ListGroup>{cart.map(item =>
        (<ListGroupItem key={item.id}>
            {item.name}x{item.quantity} ${item.price}
            <Button onClick={takeOffCart}>X</Button>
        </ListGroupItem>))}
            <Button onClick={clearCart}>Vaciar carrito</Button>
        </ListGroup>
    )
}
export default CartList