import React from "react";
import './Item.css';
import { Link } from "react-router-dom";
import { Card, CardBody, Button, ChakraProvider, Flex} from "@chakra-ui/react";




const Item = ({ id, nombre, img, precio, category }) => {
  return (
    <ChakraProvider >
    <Flex justify="center"  >
      <div className="columns-7xs">


    <Card className ="card">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
          <img src={img} alt={nombre} className="ItemImg" />
        </picture>

        <CardBody>
          <p className="Info">Categoria: {category}</p>
          <p className="Info">Precio:${precio}</p>
          

          <footer>
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="yellow">
                Ver detalles
              </Button>
            </Link>
          </footer>
        </CardBody>
      </article>
    </Card>
    </div>
    </Flex>
    </ChakraProvider>
  );
};

export default Item;
