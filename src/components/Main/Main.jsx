import StepProgress from "./StepProgress/StepProgress"
import AddressForm from "./StepProgress/AddressForm"
import ShippingForm from "./StepProgress/ShippingForm"
import CreditCardForm from "./StepProgress/CreditCardForm"
import Cart from "./Cart"

export default function Main () {
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
        <StepProgress />
          <section className="form-container col col-12">
            {/* <AddressForm />
            <ShippingForm /> */}
            <CreditCardForm />
          </section>
        </section>
        <Cart />
      </div>
    </main>
  )
}