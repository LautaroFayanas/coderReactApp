const detalle = [{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like  apple",
    "price": 549,
    "stock": 3,
    "brand": "Apple",
    "images": [
      "https://dummyjson.com/image/i/products/1/1.jpg",
    ]
  },
  {
    "id": 2,
    "title": "MacBook Pro",
    "description": "An apple mobile which is nothing like apple",
    "price": 949,
    "stock": 1,
    "brand": "Apple",
    "images": [
      "https://dummyjson.com/image/i/products/8/2.jpg",
    ]
  }

]



const detalleData = new Promise((resolve,reject) => {
    let istrue = true;
    setTimeout(() => {
        if(istrue){
            resolve(detalle)
        }else{
            reject('Failed data')
        }
    }, 2000);
})

export default detalleData;