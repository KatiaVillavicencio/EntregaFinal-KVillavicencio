import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartItem = ({ id,nombre, precio, quantity }) => {

  const { removeItem } = useContext(CartContext);
  return (
    <div className="cart-item">
     <h5> ⭑ {nombre}</h5>
      <div className="item-details">
        <p>Precio unitario: ${precio}</p>
        <p>Cantidad: {quantity}</p>
        <p>Total: ${precio * quantity}</p>
      </div>
      <Button variant="solid" colorScheme="yellow">
        <button onClick={() => removeItem(id)}>
          <Link to={`/cart`}>Eliminar </Link>
        </button>
      </Button>
    </div>

  );
};

export default CartItem;
