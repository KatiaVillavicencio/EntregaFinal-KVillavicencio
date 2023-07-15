const products = [
  {
    id: "1",
    nombre: "vestido largo",
    precio: 1000,
    category: "vestidos",
    img: "https://www.google.com/search?q=vestido+largo&tbm=isch&hl=es&chips=q:vestido+largo,g_1:noche:zahG0fzojIk%3D&rlz=1C5CHFA_enPE971PE972&sa=X&ved=2ahUKEwjBoP_s8YyAAxViHbkGHXr3CR4Q3VYoAHoECAEQLg&biw=800&bih=719#imgrc=oU6c9N7nHbn_5M&imgdii=UnYYqJzbjTVaMM",
    stock: 5,
    description: "Vestido de noche bla bla...",
  },
  {
    id: "2",
    nombre: "vestido corto",
    precio: 1000,
    category: "vestidos",
    img: "https://www.google.com/search?q=vestido+largo&tbm=isch&hl=es&chips=q:vestido+largo,g_1:noche:zahG0fzojIk%3D&rlz=1C5CHFA_enPE971PE972&sa=X&ved=2ahUKEwjBoP_s8YyAAxViHbkGHXr3CR4Q3VYoAHoECAEQLg&biw=800&bih=719#imgrc=oU6c9N7nHbn_5M&imgdii=UnYYqJzbjTVaMM",
    stock: 5,
    description: "2 Vestido de noche bla bla...",
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
