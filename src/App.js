import {ChakraProvider} from '@chakra-ui/react';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <ChakraProvider>

      <NavBar />
      <ItemListContainer greeting = {'⭑⭑⭑ Bienvenid@s a nuestra tienda online ⭑⭑⭑'} />

    </ChakraProvider>
  );
}

export default App;