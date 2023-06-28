import { ChakraProvider, Heading, HStack, Spacer, Link, Box, Center } from "@chakra-ui/react"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/assets/logo-vestidos.png"


function NavBar() {
    return (
        <ChakraProvider>

            <Center h='100px' color='black'>
                <img src={logo} alt="logo" width="100px" />
            </Center>

            <Box m={2}>
                <Center h='10px' color='black'>
                    <Heading> Black⋆Betty </Heading>
                </Center>

                <Spacer />

                <Center h='50px' color='black'>
                    <Heading as='h3' size='sd'>Fashion Store</Heading>
                </Center>

                <HStack>

                    <Spacer />

                    <Box m={1} p={2}>
                    <HStack>
    
                        <Link> Inicio </Link>
                        <Link> Vestidos </Link>
                        <Link> Accesorios </Link>
                        <CartWidget />
                        
                    </HStack>
                    </Box>

                </HStack>
            </Box>
        </ChakraProvider>
    )
}
export default NavBar