import { ChakraProvider, Box, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      });
  }, [categoryId]) 

  return (
    <ChakraProvider>
      <Center h="20px" color="black">
        <Box m={2} p={3}>
          {props.greeting}
        </Box>
      </Center>

      <Box m={5} p={4}>
        <ItemList products={products} />
      </Box>
    </ChakraProvider>
  );
}
export default ItemListContainer;
