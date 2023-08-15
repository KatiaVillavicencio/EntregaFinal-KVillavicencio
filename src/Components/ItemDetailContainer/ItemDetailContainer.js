import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { Button, Stack } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <h5>
        ⭑ Cargando detalles...
        <Stack direction="row" spacing={4}>
          <Button
            isLoading
            loadingText="Procesando"
            colorScheme="gray"
            variant="solid">
        </Button>
        </Stack>
      </h5>
    );
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
    
    
  );
};



export default ItemDetailContainer;
