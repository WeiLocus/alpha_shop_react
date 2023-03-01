import { createContext } from 'react';
import productOne from '../../assets/images//product-1.jpg'
import productTwo from '../../assets/images//product-2.jpg'

export const cartItems = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    img: productOne,
    quantity: 1,
    price: 3999,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    img: productTwo,
    quantity: 1,
    price: 1299,
  },
];

export const CartContext = createContext(cartItems)
