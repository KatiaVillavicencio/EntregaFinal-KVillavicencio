import {
  ChakraProvider,
  Heading,
  HStack,
  Spacer,
  Box,
  Center,
} from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/assets/logo-vestidos.png";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <ChakraProvider>
      
        <Center h="100px" color="black">
          <img src={logo} alt="logo" width="100px" />
        </Center>

        <Box m={2}>
          <Link to={"/"}>
            <Center h="10px" color="black">
              <Heading> Black⋆Betty </Heading>
            </Center>
          </Link>

          <Spacer />

          <Center h="50px" color="black">
            <Heading as="h3" size="sd">
              Fashion Store
            </Heading>
          </Center>

          <HStack className="Categories">
            <Spacer />

            <Box m={1} p={2}>
              <HStack>
                <NavLink to={`/`}> Inicio </NavLink>
                <NavLink to={`/category/vestidos`}> Vestidos </NavLink>
                <NavLink to={`/category/zapatos`}> Zapatos </NavLink>
                <NavLink to={`/category/accesorios`}> Accesorios </NavLink>

                <CartWidget />
              </HStack>
            </Box>
          </HStack>
        </Box>
  
    </ChakraProvider>
  );
}
export default NavBar;
