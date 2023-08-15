import React from "react";
import Item from "../Item/Item";
import { Flex, HStack, Grid, Center } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    <div>
      <Center>
      <Flex color="white">
      <HStack spacing='50px'>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} >
   
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}

      </Grid>
      </HStack>
      </Flex>
      </Center>
    </div>
  );
};

export default ItemList;
