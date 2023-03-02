import OrderPanel from './StepProgress/index'
import ProgressControl from "./ProgressControl"
import Cart from "./Cart"
import { useState } from 'react'

import { CartProvider } from './CartContext'
import { CreditCardContext, creditCardDefault } from './StepProgress/CreditCardContext'
export default function Main () {
  const [ phase, setPhase ] = useState('address')
  const handleStepButtonClick = (step) => {
    setPhase(step);
  }
  const [order, setOrder] = useState(1)
  const handleOrder = (order) => {
    setOrder(order);
  }
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardDefault)

  return (
    <main className="site-main">
      <CreditCardContext.Provider value={{creditCardInfo, setCreditCardInfo}}>
      <CartProvider>
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
    </CartProvider>
    </CreditCardContext.Provider>
    </main>
  )
}