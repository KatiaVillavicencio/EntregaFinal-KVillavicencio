import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const Item = ({ id, nombre, img, precio, category, description }) => {
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
          <p className="Info">Categoria : {category}</p>
          <p className="Info">Precio: ${precio}</p>
     

        <footer>
          <Link to={`/item/${id}`}>
            <strong> Ver detalles </strong>
          </Link>
        </footer>
        </CardBody>
      </article>
    </Card>
  );
};

export default Item;
