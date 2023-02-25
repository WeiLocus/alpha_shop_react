import productOne from '../assets/images/product-1.jpg'
import productTwo from '../assets/images/product-2.jpg'
const cartData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

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

export  {cartData, cartItems}