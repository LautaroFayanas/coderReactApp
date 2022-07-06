
const products = [
    {
        id: 1,
        tittle: 'New Balance',
        price: 250,
        description: 'Nuevas zapatillas new balance , en todos los talles.',
        category: 'Zapatillas',
        image: "./img/img1.jpg"
      },
      {
        id: 2,
        tittle: 'New Balance',
        price: 250,
        description: 'Nuevas zapatillas new balance , en todos los talles.',
        category: 'Zapatillas',
        image: "./img/img2.jpg"
  
      },
      {
        id: 3,
        tittle: 'Fila',
        price: 250,
        description: 'Nuevas zapatillas new balance , en todos los talles.',
        category: 'Zapatillas',
        image: "./img/img3.jpg"
      },
      {
        id: 4,
        tittle: 'Nike Jordan',
        price: 250,
        description: 'Nuevas zapatillas new balance , en todos los talles.',
        category: 'Zapatillas',
        image: "./img/img4.jpg"
  
      },
      {
        id: 5,
        tittle: 'Nike Jordan',
        price: 250,
        description: 'Nuevas zapatillas new balance , en todos los talles.',
        category: 'Zapatillas',
        image: "./img/img5.jpg"
      },
      {
        id: 6,
        tittle: 'Vans',
        price: 250,
        description: 'Nuevas zapatillas new balance , en todos los talles.',
        category: 'Zapatillas',
        image: "./img/img6.jpg"
      },
];

const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    // let afterPromises = false;
    setTimeout(() => {
      if (afterPromises) {
        resolve(products);
      } else {
        reject("Failed to get data");
      }
    }, 2000);
  });
  
  export default getData;