
export const products = [
  
  {
    id: "1",
    nombre: "Vestido body",
    precio: 150,
    category: "vestidos",
    img: 'https://hmperu.vtexassets.com/arquivos/ids/3281743-483-725/Vestido-bodycon-de-punto---Negro---H-M-PE.jpg?v=638079068147500000',
    stock: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    nombre: "Vestido de un hombro",
    precio: 100,
    category: "vestidos",
    img: 'https://hmperu.vtexassets.com/arquivos/ids/3120122-483-725/Vestido-de-un-hombro-en-velour-escarchado---Negro-Escarchado---H-M-PE.jpg?v=638007349883700000',
    stock: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    nombre: "Tacones sandalia",
    precio: 150,
    category: "zapatos",
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19767993_1?wid=1500&hei=1500&qlt=70',
    stock: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "4",
    nombre: "Tacones cerrados",
    precio: 150,
    category: "zapatos",
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/19534652_1?wid=1500&hei=1500&qlt=70',
    stock: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "5",
    nombre: "Conjunto collar y aretes ",
    precio: 50,
    category: "accesorios",
    img: 'https://m.media-amazon.com/images/I/81wrnVlO-AL._AC_UL1500_.jpg',
    stock: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const producto = products.find (prod => prod.id == id);
      resolve(producto);
    }, 200)
  })
};

export const getProductsByCategory = (productCategory) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productsCategory = products.filter(prod => prod.category === productCategory);
      resolve (productsCategory)
    }, 500);
  })
};
