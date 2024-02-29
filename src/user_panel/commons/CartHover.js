import { Link } from 'react-router-dom'
import product from '../assets/images/products/phone.jpg'

const CartHover = () => {
  return (
    <div className="cart-hover-container">
        <div className='cart-hover-box'>
      <h3>Cart Details</h3>
      <div className="cart-items">
              <div className="cart-item-header">
                <h3>Product</h3>
                <h3>Sub Total</h3>
              </div>
              <div className="cart-item-box">
                <div className="item-details">
                  <div className="item-image">
                    <img src={product} alt="" />
                  </div>
                  <div className="item-attributes">
                    <p>iPad v8</p>
                    <p>color: black</p>
                    <p>other details</p>
                    <div className="">
                      <div className="qty">
                        <button>-</button>
                        <input type="text" name="quantity" id="" value="1" />
                        <button>+</button>
                      </div>
                      <button className="remove">Remove</button>
                    </div>
                  </div>
                </div>
                <span className="total">
                  <b>$167.90</b>
                </span>
              </div>
            </div>
            <Link to="cart" className="btn">View Cart Deatils</Link>
    </div>
    </div>
  )
}

export default CartHover
