import React, { useContext } from "react";
import { Card, CardBody, Button } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import './ItemDetail.css';
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ id, nombre, img, precio, stock, description }) => 
{
  const [quantityAdded, setQuantityAdded] = useState(0);

  const {addItem} = useContext (CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {id,nombre,precio}
    addItem (item,quantity)
  };

  return (
    <Card className="cardDetail">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
          <img src={img} alt={nombre} className="ItemImg" />
        </picture>

        <CardBody className="cardBody">
          <section>
            <p className="Info">Id:{id}</p>
            <p className="Info">Precio: ${precio}</p>
            <p className="Info">Descripción: {description}</p>
            <p className="Info">Stock disponible : {stock}</p>
          </section>

          <footer>
          <Button variant="solid" colorScheme="yellow">
            {quantityAdded > 0 ? (
              <Link to="/cart">Finalizar compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )}
            </Button>
          </footer>
        </CardBody>
      </article>
    </Card>
  );
};

export default ItemDetail;
