import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button, Spacer } from "@chakra-ui/react";


const Cart =() => {
const {cart, clearCart, totalQuantity} = useContext (CartContext)

let total = 0;
cart.forEach((p) => {
    total += p.precio * p.quantity;
});

if (totalQuantity === 0) {
    return (
        <div>
            <h1> No hay productos en el carrito</h1>
            <Link to= "/"> Productos </Link>
        </div>
    )
}

return (
<div>
    {cart.map (p => <CartItem key={p.id} {...p}/>)}
    <h3>Subtotal: ${total} </h3>
    <Button> <Link onClick={() => clearCart()}> Limpiar carrito</Link> </Button> 
    <Button> <Link  to= "/"> Seguir comprando</Link></Button> 
    <Button> <Link  to= "/checkout"> Checkout</Link></Button> 
</div>
)
};
export default Cart

