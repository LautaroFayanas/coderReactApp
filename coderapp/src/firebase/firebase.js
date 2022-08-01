import { initializeApp } from "firebase/app";
import { getFirestore , doc , getDoc ,  collection , getDocs, query , where } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDt_UDaBSse_qhHNfnyNWUN06SNgQfSVTk",
  authDomain: "coderappreact.firebaseapp.com",
  projectId: "coderappreact",
  storageBucket: "coderappreact.appspot.com",
  messagingSenderId: "986383775330",
  appId: "1:986383775330:web:db7b3547dce341160e433b",
  measurementId: "G-GDNQ18F54S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async (categoryID) =>{
  if(categoryID){
    getProductsByCategoryID(categoryID)
  }else{
    return await getAllProducts();
  }
}

export const getProductsByID = async(productID) =>{
  return (await getDoc(doc(db,"products", productID))).data();
}

export const getProductsByCategoryID = async (categoryID) => {
  const itemsCollection = collection(db , "products" );
  const q = query(itemsCollection , where("Category", "==" , categoryID))
  
  return await getDocs(q);
  
}

export const getAllProducts = async () =>{
  const itemsCollection = collection(db , "products");
  const q = query (itemsCollection) ;
  return await getDocs(q);

}

