import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, SetQuantity] = useState(inictial);

  const sumar = () => {
    if (quantity < stock) {
      SetQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      SetQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={restar}> - </button>
        <h3> {quantity} </h3>
        <button onClick={sumar}> + </button>
      </div>

      <div>
        <button onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carritoo
        </button>
      </div>
    </div>
  );
};
