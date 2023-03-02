
export default function ShippingForm ({phase,onShippingOption}) {
  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        <ShippingOption 
          id='shipping-standard'
          name='shipping'
          text='標準運送'
          period='約 3~7 個工作天'
          price={0}
          onChange={(e) => onShippingOption(e )}
        />
        <ShippingOption
          id='shipping-dhl'
          name='shipping'
          text='DHL 貨運'
          period='48 小時內送達'
          price={500}
          onChange={(e) => onShippingOption(e)}
          />
      </section>
    </form>
  )
}

function ShippingOption ({id, name, text, period, price, onChange}) {
  return (
    <label className="radio-group col col-12" data-price={price}>
      <input id={id} type="radio" name={name} onChange={onChange}/>
      <div className="radio-info">
        <div className="col col-12 content">
          <div className="text">{text}</div>
          <div className="price">{price === 0 ? '免費' : `$ ${price}`}</div>
        </div>
        <div className="period col col-12">{period}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  )
}