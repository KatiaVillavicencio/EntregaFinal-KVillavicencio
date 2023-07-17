import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import React, { useState, useEffect } from "react";
import {getProducts,getProductsByCategory} from '../asyncMock'


function ItemListContainer(props) {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams ()

    useEffect (() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then (response => {
            setProducts(response)
        })
            .catch (error => {
                console.error(error)

            })
        }, 
        [categoryId])
    

    return (
        <ChakraProvider>

      <Center h='20px' color='black'>
                <Box m={2} p={3}>
                    {props.greeting}
                </Box>
            </Center> 

            <Box m={5} p={4}>
            <ItemList products={products}/>
            </Box>
        </ChakraProvider>
    )
}
export default ItemListContainer