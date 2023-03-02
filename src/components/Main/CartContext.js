import { createContext } from 'react';
import { useState} from 'react'
import productOne from '../../assets/images//product-1.jpg'
import productTwo from '../../assets/images//product-2.jpg'

const cartItems = [
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

export function CartProvider({ children }) {
  const [cartLists, setCartLists] = useState([...cartItems]);

  const handleQuantityClick = (id, action) => {
    const nextCartLists = cartLists.map((item) => {
          if (item.id === id) {
            if (action === "add") {
              return {
                ...item,
                quantity: item.quantity + 1
              }
            } else if (action === "minus") {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
          }
          return item
        })
        // 只顯示商品數量 > 1 的商品
        setCartLists(nextCartLists.filter((item) => item.quantity > 0 ))
  };

  return (
    <CartContext.Provider value={{ cartLists, handleQuantityClick }}>
      {children}
    </CartContext.Provider>
  );
}