import {ReactComponent as LeftArrow} from "assets/icons/left-arrow.svg"
import {ReactComponent as RightArrow} from "assets/icons/right-arrow.svg"

export default function ProgressControl ({phase ,onClick}) {
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase={phase}>
        {phase !== "address" && <PrevBtn onClick={onClick}/>}
        {phase !== "credit-card" ?
            <NextBtn onClick={onClick} />  : <button className="next">確認下單</button> }
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