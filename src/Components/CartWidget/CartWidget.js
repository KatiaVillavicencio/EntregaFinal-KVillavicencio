import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { NavLink } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";




const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    
    <ChakraProvider>

      <NavLink to={`/cart`}>  <BsCartFill/>  </NavLink>
      <span> {totalQuantity()} </span>
   
    </ChakraProvider>
  );
};
export default CartWidget;
