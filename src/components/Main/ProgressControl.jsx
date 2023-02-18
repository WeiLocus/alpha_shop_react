import {ReactComponent as LeftArrow} from "assets/icons/left-arrow.svg"
import {ReactComponent as RightArrow} from "assets/icons/right-arrow.svg"

export default function ProgressControl () {
  return (
    <section class="progress-control-container col col-lg-6 col-sm-12">
      <section class="button-group col col-12" data-phase="address">
        {/* <PrevBtn /> */}
        <NextBtn />
      </section>
    </section> 
  )
}

function PrevBtn () {
  return (
    <button class="prev">
      <LeftArrow className="btn-action"/>
      上一步
    </button>
  )
}

function NextBtn () {
  return (        
    <button class="next">
      下一步
      <RightArrow className="btn-action"/>
    </button>)
}