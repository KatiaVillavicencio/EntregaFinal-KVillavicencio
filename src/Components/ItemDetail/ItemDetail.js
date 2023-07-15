
const ItemDetail = ({ id, nombre, img, precio, stock, description }) => {
    return (
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
          <img src={img} alt={nombre} className="ItemImg" />
        </picture>
  
        <section>
          <p className="Info">Precio: ${precio}</p>
          <p className="Info">Stock disponible : {stock}</p>
          <p className="Info">Descripcion: {description}</p>

        </section>
  
        <footer className="ItemFooter">
          
        </footer>
      </article>
    );
  };
  
  export default ItemDetail
  