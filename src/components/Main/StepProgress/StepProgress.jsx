import {ReactComponent as Complete} from 'assets/icons/pg-complete.svg'

export default function StepProgress () {
  return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      {/* register-progress */}
          <section className="progress-container col col-12">
            <Progress 
              phase="address" order={1} label="寄送地址" />
            <Progress 
              phase="shipping" order={2} label="運送方式" />
            <Progress 
              phase="credit-card" order={3} label="付款資訊" />
          </section>
    </>
  )
}

function Progress({phase, order, label}) {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon">
          <span className="text">{order}</span>
          <Complete className="icon cursor-point"/>
        </span>
        <span className="progress-label">{label}</span>
      </span>
      {order !== 3 && <span className="progress-bar" data-order={order}></span>}
    </>
  )
}