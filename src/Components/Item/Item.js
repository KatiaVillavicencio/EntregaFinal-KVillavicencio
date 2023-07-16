import React from "react"; 
import {Link} from "react-router-dom";


const Item = ({ id, nombre, img, precio, category, description }) => {
  return (

    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className="ItemImg" />
      </picture>

      <section>
        <p className="Info">Categoria : {category}</p>
        <p className="Info">Precio: ${precio}</p>
      </section>

      <footer className="ItemFooter">
        <Link to={`/item/${id}`} >
          <strong> Ver detalles </strong>
        </Link>
    
    
      </footer>
    </article>

  );
};

export default Item;
