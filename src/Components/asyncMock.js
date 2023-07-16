
export const products = [
  {
    id: "1",
    nombre: "vestido largo",
    precio: 150,
    category: "vestidos",
    img: 'https://picsum.photos/200/200',
    stock: 5,
    description: "Vestido de noche bla bla...",
  },
  {
    id: "2",
    nombre: "vestido corto",
    precio: 100,
    category: "vestidos",
    img: 'https://picsum.photos/200/200',
    stock: 5,
    description: "2 Vestido de noche bla bla...",
  },
  {
    id: "3",
    nombre: "Tacones",
    precio: 150,
    category: "zapatos",
    img: 'https://picsum.photos/200/200',
    stock: 5,
    description: "descripcion bla bla...",
  },
  {
    id: "4",
    nombre: "Tacones-2",
    precio: 150,
    category: "zapatos",
    img: 'https://picsum.photos/200/200',
    stock: 5,
    description: "descripcion bla bla...",
  },
  {
    id: "5",
    nombre: "Aretes",
    precio: 50,
    category: "accesorios",
    img: 'https://picsum.photos/200/200',
    stock: 5,
    description: "descripcion bla bla...",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.category === productCategory));
    }, 500);
  });
};
