import {ReactComponent as Plus} from "assets/icons/plus.svg"
import {ReactComponent as Minus} from "assets/icons/minus.svg"
import cartData from "constants/cartData"

export default function Cart () {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
    <h3 className="cart-title">購物籃</h3>
    <section className="product-list col col-12" data-total-price="0">
      <OrderItem items={cartData}/>
    </section>
    <CartInfo />
  </section>
  )
}

function OrderItem ({items}) {
  return (
    <>
      {items.map ((item) => (
        <div className="product-container col col-12" data-count="0" data-price={item.price} key={item.id}>
        <img className="img-container" src={item.img} alt={item.name}/>
        <div className="product-info">
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <Minus className="product-action cursor-point" />
              <span className="product-count">{item.quantity}</span>
              <Plus className="product-action cursor-point" />
            </div>
          </div>
          <div className="price">${item.price * item.quantity}</div>
        </div>
      </div>
      ))}
    </>
  )
}

function CartInfo () {
  return (
    <>
      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免運</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$5298</div>
      </section>
    </>
  )
}