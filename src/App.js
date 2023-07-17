import {ChakraProvider} from '@chakra-ui/react';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider >

    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element= {<ItemListContainer greeting= {"⭑⭑⭑ Bienvenid@s ⭑⭑⭑"}/>}/>
      <Route path='/category/:Id' element= {<ItemListContainer/>}/>
      <Route path='/item/:Id' element= {<ItemDetailContainer />}/>

      
      </Routes>

    </BrowserRouter>

    </ChakraProvider>

  );
}

export default App;
