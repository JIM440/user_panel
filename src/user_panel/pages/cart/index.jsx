import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RootLayout from '../../layout/RootLayout';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemQty, setItemQty] = useState(1);
  const [blurBackground, setBlurBackground] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('cartItem')) || [];
    setCartItems(storage);
  }, []);

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCartItems);

    localStorage.setItem('cartItem', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <div className="jim">
        <section id="cart-section">
          <div className="container">
            <div className="cart-container">
              <h2>Shopping Cart</h2>
              {/* cart items */}
              {cartItems.length !== 0 ? (
                <div className="cart-items">
                  <div className="cart-item-header">
                    <h3>Product</h3>
                    <h3 className="show-desktop">Unit Price</h3>
                    <h3 className="show-desktop">Quantity</h3>
                    <h3>Sub Total</h3>
                    <h3 className="show-desktop">x</h3>
                  </div>
                  {cartItems.map((item) => (
                    <div className="cart-item-box">
                      <div className="item-details">
                        <div className="item-image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="item-attributes">
                          <p>{item.name}</p>
                          <p>color: black</p>
                          <p>{item.quantity}</p>
                          <div className="show-mobile">
                            <div className="qty">
                              <button
                                onChange={(e) => {
                                  setItemQty(e.target.value--);
                                }}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                name="quantity"
                                id=""
                                value={itemQty}
                                onChange={(e) => {
                                  setItemQty(e.target.value);
                                }}
                              />
                              <button
                                onChange={(e) => {
                                  setItemQty(e.target.value++);
                                }}
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="remove"
                              onClick={() => {
                                handleRemove(item.id);
                              }}
                            >
                              Remove
                            </button>
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

                      <button
                        className="remove show-desktop"
                        onClick={() => {
                          handleRemove(item.id);
                        }}
                      >
                        <i className="bx bx-x"></i>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <h1 className="container">Cart is empty</h1>
              )}
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
              <Link to="/" className="checkout btn">
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </section>
      </div>
      <RootLayout heroHeight={0} setBlurBackground={setBlurBackground} />
    </>
  );
};

export default Cart;
