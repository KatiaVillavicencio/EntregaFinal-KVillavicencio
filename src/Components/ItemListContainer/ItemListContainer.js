import { ChakraProvider, Box, Center } from '@chakra-ui/react';



function ItemListContainer(props) {
    return (
        <ChakraProvider>

            <Center h='20px' color='black'>
                <Box m={2} p={3}>
                    {props.greeting}
                </Box>
            </Center>

        </ChakraProvider>
    )
}
export default ItemListContainer