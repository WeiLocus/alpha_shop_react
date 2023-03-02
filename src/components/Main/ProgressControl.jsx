import {ReactComponent as LeftArrow} from "assets/icons/left-arrow.svg"
import {ReactComponent as RightArrow} from "assets/icons/right-arrow.svg"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { CreditCardContext } from "./StepProgress/CreditCardContext"

export default function ProgressControl ({phase ,onSwitchPhase, onBtnClick, shippingCost }) {
  const  { cartLists }  = useContext(CartContext)
  const  { creditCardInfo }   = useContext(CreditCardContext)

  const totalPrice = cartLists.reduce((total,item) => {
    return total + item.price * item.quantity
  },Number(shippingCost))
  // console.log('totalPrice:',totalPrice)

  function handleBtnSubmit (e) {
    const payment = `cardHolder: ${creditCardInfo.cardHolder}、cardNumber: ${creditCardInfo.cardNumber}、expireDate: ${creditCardInfo.expireDate}、cvc: ${creditCardInfo.cvc} `
    console.log(`information,${payment}`)
    // console.log(creditCardInfo)
    console.log(`Price: $ ${totalPrice.toLocaleString()} 元`)
    setTimeout( () => {
      onSwitchPhase("address")
      onBtnClick((order) => order - 2)
    },1000)
  }

  const handleBtnClick = (e) => {
    const btnPhase = e.target.parentElement.dataset.phase
    console.log(e.target)
    //control nextBtn
    if ( e.target.className === "next" && e.target.closest("button")) {
      if (btnPhase === "address") {
        onSwitchPhase("shipping")
      }
      if (btnPhase === "shipping") {
        onSwitchPhase("credit-card")
      }
      onBtnClick((order) => order + 1)
    }
    //control prevBtn
    if ( e.target.className === "prev" && e.target.closest("button")) {
      if (btnPhase === "shipping") {
        onSwitchPhase("address")
      }
      if (btnPhase === "credit-card") {
        onSwitchPhase("shipping")
      }
      onBtnClick((order) => order - 1)
    }

  }
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase={phase}>
        {phase === "address" && <NextBtn onClick={handleBtnClick} />}
        {phase === 'shipping' && 
          <>
          <PrevBtn onClick={handleBtnClick}/>
          <NextBtn onClick={handleBtnClick} />  
          </>
        }
        {phase === "credit-card" && 
          <>
          <PrevBtn onClick={handleBtnClick}/>
          <button className="next" onClick={ (e) => handleBtnSubmit(e)}>確認下單</button> 
          </>
        }
      </section>
    </section> 
  )
}

function PrevBtn ({onClick}) {
  return (
    <button class="prev" onClick={onClick}>
      <LeftArrow className="btn-action"/>
      上一步
    </button>
  )
}

function NextBtn ({onClick}) {
  return (        
    <button class="next" onClick={onClick}>
      下一步
      <RightArrow className="btn-action"/>
    </button>)
}