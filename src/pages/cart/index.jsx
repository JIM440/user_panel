import product from '../../assets/images/products/ipad.jpg';
const Cart = () => {
  return (
    <>
      <section id="cart-section">
        <div className="container">
          <div className="cart-container">
            <h2>Shopping Cart</h2>
            {/* cart items */}
            <div className="cart-items">
              <div className="cart-item-header">
                <h3>Product</h3>
                <h3 className="show-desktop">Unit Price</h3>
                <h3 className="show-desktop">Quantity</h3>
                <h3>Sub Total</h3>
                <h3 className="show-desktop">x</h3>
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
                    <div className="show-mobile">
                      <div className="qty">
                        <button>-</button>
                        <input type="text" name="quantity" id="" value="1" />
                        <button>+</button>
                      </div>
                      <button className="remove">Remove</button>
                    </div>
                  </div>
                </div>
                <span className="unit-price show-desktop">$159.90</span>
                <div className="qty show-desktop">
                  <button>-</button>
                  <input type="text" name="quantity" value="1" id="" />
                  <button>+</button>
                </div>
                <span className="total">
                  <b>$167.90</b>
                </span>

                <button className="remove show-desktop">
                  <i className="bx bx-x"></i>
                </button>
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
                    <div className="show-mobile">
                      <div className="qty">
                        <button>-</button>
                        <input type="text" name="quantity" id="" value="1" />
                        <button>+</button>
                      </div>
                      <button className="remove">Remove</button>
                    </div>
                  </div>
                </div>
                <span className="unit-price show-desktop">$159.90</span>
                <div className="qty show-desktop">
                  <button>-</button>
                  <input type="text" name="quantity" value="1" id="" />
                  <button>+</button>
                </div>
                <span className="total">
                  <b>$167.90</b>
                </span>

                <button className="remove show-desktop">
                  <i className="bx bx-x"></i>
                </button>
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
                    <div className="show-mobile">
                      <div className="qty">
                        <button>-</button>
                        <input type="text" name="quantity" id="" value="1" />
                        <button>+</button>
                      </div>
                      <button className="remove">Remove</button>
                    </div>
                  </div>
                </div>
                <span className="unit-price show-desktop">$159.90</span>
                <div className="qty show-desktop">
                  <button>-</button>
                  <input type="text" name="quantity" value="1" id="" />
                  <button>+</button>
                </div>
                <span className="total">
                  <b>$167.90</b>
                </span>

                <button className="remove show-desktop">
                  <i className="bx bx-x"></i>
                </button>
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
                    <div className="show-mobile">
                      <div className="qty">
                        <button>-</button>
                        <input type="text" name="quantity" id="" value="1" />
                        <button>+</button>
                      </div>
                      <button className="remove">Remove</button>
                    </div>
                  </div>
                </div>
                <span className="unit-price show-desktop">$159.90</span>
                <div className="qty show-desktop">
                  <button>-</button>
                  <input type="text" name="quantity" value="1" id="" />
                  <button>+</button>
                </div>
                <span className="total">
                  <b>$167.90</b>
                </span>

                <button className="remove show-desktop">
                  <i className="bx bx-x"></i>
                </button>
              </div>
            </div>
            {/* coupon */}
            <div className="coupon">
              <form action="">
                <input type="text" placeholder="Enter coupon code" />
                <button type="submit" className="btn">
                  Apply Coupon
                </button>
              </form>
            </div>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary">
              <div>
                <p>Sub-Total:</p>
                <span>$500</span>
              </div>
              <div>
                <p>Coupon:</p>
                <span>- $0</span>
              </div>
              <div>
                <p>Shipping:</p>
                <span>$29</span>
              </div>
              <hr />
              <div>
                <p>
                  <b>Total:</b>
                </p>
                <span>
                  <b>$520</b>
                </span>
              </div>
            </div>
            <button className="checkout btn">Proceed To Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
