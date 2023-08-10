import { useState } from "react";
import { Button, SimpleGrid,} from "@chakra-ui/react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, SetQuantity] = useState(initial);

  const sumar = () => {
    if (quantity < stock) {
      SetQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 0) {
      SetQuantity(quantity - 1);
    }
  };

  return (
  
    <div className="botones">
      <div>
      <SimpleGrid columns={3}>
        <Button>
          <button onClick={restar}> - </button>
        </Button>
        <h2> {quantity} </h2>
        
        <Button>
          <button onClick={sumar}> + </button>
        </Button>
        </SimpleGrid>
  
      </div>

      <div>
        <Button variant="solid" colorScheme="yellow">
          <button onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
          </button>
        </Button>
      </div>
    </div>
  
  );
};

export default ItemCount;
