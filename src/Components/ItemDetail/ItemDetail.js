import React from "react";
import { Card, CardBody, Button } from "@chakra-ui/react";

const ItemDetail = ({ id, nombre, img, precio, stock, description }) => {
  return (
    <Card>
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
          <img src={img} alt={nombre} className="ItemImg" />
        </picture>
        
        <CardBody>
          <section>
            <p className="Info">Id:{id}</p>
            <p className="Info">Precio: ${precio}</p>
            <p className="Info">Descripcion: {description}</p>
            <p className="Info">Stock disponible : {stock}</p>
          </section>

          <footer>
          <button>
            <Button variant="solid" colorScheme="yellow">
              Agregar al Carrito
            </Button>
          </button>
          </footer>
        </CardBody>
      </article>
    </Card>
  );
};

export default ItemDetail;
