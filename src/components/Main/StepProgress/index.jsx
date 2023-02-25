import StepProgress from "./StepProgress"
import AddressForm from "./AddressForm"
import ShippingForm from "./ShippingForm"
import CreditCardForm from "./CreditCardForm"
import ProgressControl from "../ProgressControl"
import { useState } from 'react'

export default function OrderPanel () {
  const [ phase, setPhase ] = useState('address')
  const [order, setOrder] = useState(1)
  const handleBtnClick = (e) => {
    // console.log(e.target)

    const btnPhase = e.target.parentElement.dataset.phase
    //control nextBtn
    if ( e.target.className === "next" && e.target.closest("button")) {
      if (btnPhase === "address") {
        setPhase("shopping")
      }
      if (btnPhase === "shopping") {
        setPhase("credit-card")
      }
      setOrder ( (order) => order + 1 )
    }
    //control prevBtn
    if ( e.target.className === "prev" && e.target.closest("button")) {
      if (btnPhase === "shopping") {
      setPhase("address")
    }
    if (btnPhase === "credit-card") {
      setPhase("shopping")
    }
    setOrder( (order) => order - 1)
    }
  }

  return (
    <section className="register-container col col-lg-6 col-sm-12" data-phase={order} data-total-price="0">
    <StepProgress  phase={phase}/>
      <section className="form-container col col-12" >
        <AddressForm />
        <ShippingForm />
        <CreditCardForm />
      </section>
      <ProgressControl 
        phase={phase}
        onClick={handleBtnClick}
        />
    </section>
  )
}