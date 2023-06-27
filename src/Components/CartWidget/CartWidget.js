import { BsCartFill } from "react-icons/bs";
import { ChakraProvider} from "@chakra-ui/react"


function CartWidget() {
    return (
        <ChakraProvider>
                <BsCartFill /> 
                 0
        </ChakraProvider>
    )
}
export default CartWidget