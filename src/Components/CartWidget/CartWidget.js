import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";




const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <ChakraProvider>
        <Link
        to="/cart" style={{ display : totalQuantity > 0 ? "block" : "none" }}>
        </Link>
      <BsCartFill/> 
      <span> {totalQuantity()} </span>

    </ChakraProvider>
  );
};
export default CartWidget;
