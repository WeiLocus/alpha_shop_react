import StepProgress from "./StepProgress"
import AddressForm from "./AddressForm"
import ShippingForm from "./ShippingForm"
import CreditCardForm from "./CreditCardForm"

export default function OrderPanel ({phase, order, onShippingOption}) {
  return (
    <section className="register-container col col-lg-6 col-sm-12" data-phase={order} data-total-price="0">
    <StepProgress  phase={phase}/>
      <section className="form-container col col-12" >
        <AddressForm />
        <ShippingForm onShippingOption={onShippingOption}/>
        <CreditCardForm />
      </section>
    </section>
  )
}