import {ChakraProvider} from '@chakra-ui/react';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';



function App() {
  return (

    <ChakraProvider >
   
    <BrowserRouter>
    <CartProvider>
    
      <NavBar />
      <Routes>

      <Route path='/' element= {<ItemListContainer greeting= {"⭑⭑⭑ Bienvenid@s ⭑⭑⭑"}/>}/>
      <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
      <Route path='/item/:id' element= {<ItemDetailContainer />}/>
      <Route path= '/cart' element={<Cart/>}/>
   
      <Route path= '/*/' element={<h2>404 Sitio no encontrado</h2>}/>
      
      </Routes>
      
      </CartProvider>
    </BrowserRouter>

    </ChakraProvider>
    

  );
}

export default App;
