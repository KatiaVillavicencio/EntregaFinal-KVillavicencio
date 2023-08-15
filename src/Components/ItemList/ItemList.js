import React from "react";
import Item from "../Item/Item";
import {Grid, Center } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  return (
    <div>
      <Center>
  
      <Grid templateColumns='repeat(3, 1fr)' gap={8} >
        
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}

      </Grid>
  
      </Center>
    </div>
  );
};

export default ItemList;
