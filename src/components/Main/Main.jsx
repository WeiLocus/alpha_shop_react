import OrderPanel from './StepProgress/index'
import ProgressControl from "./ProgressControl"
import Cart from "./Cart"
import { useState } from 'react'

import { CartContext, cartItems } from './CartContext'
export default function Main () {
  const [ phase, setPhase ] = useState('address')
  const handleStepButtonClick = (step) => {
    setPhase(step);
  }

  const [order, setOrder] = useState(1)
  const handleOrder = (order) => {
    setOrder(order);
  }
  const [products,setProducts] = useState(cartItems)
  return (
    <main className="site-main">
      <CartContext.Provider value={[products,setProducts]}>
      <div className="main-container">
        <OrderPanel 
          phase={phase}
          order={order}
          />
        <Cart />
        <ProgressControl 
          phase={phase}
          onSwitchPhase={handleStepButtonClick}
          order={order}
          onBtnClick={handleOrder}/>
      </div>
    </CartContext.Provider>
    </main>
  )
}