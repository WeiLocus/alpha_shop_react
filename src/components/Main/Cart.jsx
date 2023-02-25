import {ReactComponent as Plus} from "assets/icons/plus.svg"
import {ReactComponent as Minus} from "assets/icons/minus.svg"
import { cartItems } from "constants/cartData"

import { useState } from 'react'

export default function Cart () {
  const [ cartLists, setCartLists ] = useState([...cartItems])
  const totalPrice = cartLists.reduce((total,item) => {
    return total + item.price * item.quantity
  },0)
  // console.log('totalPrice:',totalPrice)
  // + & - 的Click event handler，傳入id 和action 判斷行為
  const  handleQuantityClick = (id, action) => {
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
  }

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
    <h3 className="cart-title">購物籃</h3>
    <OrderItem items={cartLists} handleQuantityClick={handleQuantityClick}/>
    <CartInfo totalPrice={totalPrice}/>
  </section>
  )
}

function OrderItem ({items, handleQuantityClick}) {
  const listItems = items.map ((item) => {
    return (
      <div 
        className="product-container col col-12" 
        data-count="0" 
        data-price={item.price} 
        key={item.id}>
        <img className="img-container" src={item.img} alt={item.name}/>
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <Minus className="product-action cursor-point" onClick={() => handleQuantityClick(item.id,"minus")}/>
              <span className="product-count">{item.quantity}</span>
              <Plus className="product-action cursor-point" onClick={() => handleQuantityClick(item.id,"add")}/>
            </div>
          </div>
          <div className="price">${item.price}</div>
        </div>
      </div>
  )
  })
  return (
    <section className="product-list col col-12" data-total-price="0">
      {listItems}
    </section>
    )
}

function CartInfo ({totalPrice}) {
  return (
    <>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免運</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice}</div>
      </section>
    </>
  )
}