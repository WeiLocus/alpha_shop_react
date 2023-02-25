import OrderPanel from './StepProgress/index'
import Cart from "./Cart"
import ProgressControl from "./ProgressControl"
// import { useState } from 'react'

export default function Main () {



  return (
    <main className="site-main">
      <div className="main-container">
        <OrderPanel />
        <Cart />
        {/* <ProgressControl /> */}
      </div>
    </main>
  )
}