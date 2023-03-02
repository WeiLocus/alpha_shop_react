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

  const [ shippingCost, setShippingCost ] = useState(0)
  const handleShippingCost = (e) => {
    if (e.target.id === 'shipping-dhl') {
      setShippingCost(500)
    } else if (e.target.id === 'shipping-standard') {
      setShippingCost(0)
    }
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
          onShippingOption={handleShippingCost}
          />
        <Cart shippingCost={shippingCost}/>
        <ProgressControl 
          phase={phase}
          onSwitchPhase={handleStepButtonClick}
          order={order}
          onBtnClick={handleOrder}
          shippingCost={shippingCost}/>
      </div>
    </CartProvider>
    </CreditCardContext.Provider>
    </main>
  )
}