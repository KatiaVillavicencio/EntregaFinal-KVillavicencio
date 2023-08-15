import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartItem = ({ id, img, nombre, precio, quantity }) => {

  const { removeItem } = useContext(CartContext);
  return (
    <div className="cart-item">
      <img src={img} alt={nombre} />
      <br />
      <div className="item-details">
        <p>Precio: ${precio}</p>
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
