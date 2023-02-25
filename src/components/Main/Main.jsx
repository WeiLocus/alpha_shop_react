import OrderPanel from './StepProgress/index'
import Cart from "./Cart"

export default function Main () {

  return (
    <main className="site-main">
      <div className="main-container">
        <OrderPanel />
        <Cart />
      </div>
    </main>
  )
}