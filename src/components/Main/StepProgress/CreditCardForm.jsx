
export default function CreditCardForm () {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <PaymentInfo 
            className="input-group input-w-lg-4 input-w-sm-full"
            inputLabel="持卡人姓名" type="text" placeholder="John Doe"
            />
        </div>
        <div className="col col-12">
          <PaymentInfo 
            className="input-group input-w-lg-4 input-w-sm-full"
            inputLabel="卡號" type="text" placeholder="1111 2222 3333 4444"
            />
        </div>
        <div className="col col-12">
          <PaymentInfo 
            className="input-group input-w-lg-3 input-w-sm-s3"
            inputLabel="有效期限" type="text" placeholder="MM/YY"
            />
          <PaymentInfo 
            className="input-group input-w-lg-3 input-w-sm-s3"
            inputLabel="CVC / CCV" type="text" placeholder="123"
            />
        </div>
      </section>
    </form>
  )
}

function PaymentInfo ({className, inputLabel, text, placeholder}) {
  return (
    <div className={className}>
      <div className="input-label">{inputLabel}</div>
      <input type={text} placeholder={placeholder} />
    </div>
  )
}