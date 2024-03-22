import React from "react";
import './cart.css'

const NavCart = () => {
	return (
		<div className="main-cart-body">
			<div className="cart-item-container">
                <div className="cart-header">
                    <h2>Cart</h2>
                    <hr />
                </div>
				<div className="cart-item">
					<div className="product-img">
						<img
							src={require("../../assets/images/category_images/airpods.png")}
							alt="alt"
						/>
					</div>
					<ul className="product-details">
						<li className="product-name">Airpod Max</li>
						<li className="color-container">
							<span>Color: </span>
							<div className="color"></div>
						</li>
						<li className="quantity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								data-name="Layer 1"
								viewBox="0 0 24 24"
								width="512"
								height="512">
								<path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm5-10c0,.552-.448,1-1,1h-8c-.552,0-1-.448-1-1s.448-1,1-1h8c.552,0,1,.448,1,1Z" />
							</svg>
							<span class="quantityInput">1</span>
							<svg
								id="Layer_1"
								height="512"
								viewBox="0 0 24 24"
								width="512"
								xmlns="http://www.w3.org/2000/svg"
								data-name="Layer 1">
								<path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
							</svg>
						</li>
					</ul>
					<span className="subtotal">$99.9</span>
					<svg className="remove-cart-item"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="512"
						height="512">
						<path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					</svg>
				</div>
                <div className="cart-item">
					<div className="product-img">
						<img
							src={require("../../assets/images/category_images/iphone.png")}
							alt="alt"
						/>
					</div>
					<ul className="product-details">
						<li className="product-name">iPhone 15 Pro</li>
						<li className="color-container">
							<span>Color: </span>
							<div className="color"></div>
						</li>
						<li className="quantity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								data-name="Layer 1"
								viewBox="0 0 24 24"
								width="512"
								height="512">
								<path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm5-10c0,.552-.448,1-1,1h-8c-.552,0-1-.448-1-1s.448-1,1-1h8c.552,0,1,.448,1,1Z" />
							</svg>
							<span class="quantityInput">1</span>
							<svg
								id="Layer_1"
								height="512"
								viewBox="0 0 24 24"
								width="512"
								xmlns="http://www.w3.org/2000/svg"
								data-name="Layer 1">
								<path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
							</svg>
						</li>
					</ul>
					<span className="subtotal">$99.9</span>
					<svg className="remove-cart-item"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="512"
						height="512">
						<path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					</svg>
				</div>
                <div className="cart-item">
					<div className="product-img">
						<img
							src={require("../../assets/images/category_images/iMac.png")}
							alt="alt"
						/>
					</div>
					<ul className="product-details">
						<li className="product-name">iMac mini</li>
						<li className="color-container">
							<span>Color: </span>
							<div className="color"></div>
						</li>
						<li className="quantity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								data-name="Layer 1"
								viewBox="0 0 24 24"
								width="512"
								height="512">
								<path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm5-10c0,.552-.448,1-1,1h-8c-.552,0-1-.448-1-1s.448-1,1-1h8c.552,0,1,.448,1,1Z" />
							</svg>
							<span class="quantityInput">1</span>
							<svg
								id="Layer_1"
								height="512"
								viewBox="0 0 24 24"
								width="512"
								xmlns="http://www.w3.org/2000/svg"
								data-name="Layer 1">
								<path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
							</svg>
						</li>
					</ul>
					<span className="subtotal">$99.9</span>
					<svg className="remove-cart-item"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="512"
						height="512">
						<path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					</svg>
				</div>
                <div className="cart-item">
					<div className="product-img">
						<img
							src={require("../../assets/images/category_images/iwatch.png")}
							alt="alt"
						/>
					</div>
					<ul className="product-details">
						<li className="product-name">Watch 2 Ultra</li>
						<li className="color-container">
							<span>Color: </span>
							<div className="color"></div>
						</li>
						<li className="quantity">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								data-name="Layer 1"
								viewBox="0 0 24 24"
								width="512"
								height="512">
								<path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm5-10c0,.552-.448,1-1,1h-8c-.552,0-1-.448-1-1s.448-1,1-1h8c.552,0,1,.448,1,1Z" />
							</svg>
							<span class="quantityInput">1</span>
							<svg
								id="Layer_1"
								height="512"
								viewBox="0 0 24 24"
								width="512"
								xmlns="http://www.w3.org/2000/svg"
								data-name="Layer 1">
								<path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
							</svg>
						</li>
					</ul>
					<span className="subtotal">$99.9</span>
					<svg className="remove-cart-item"
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="512"
						height="512">
						<path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
					</svg>
				</div>
			</div>
            <div className="cart-footer">
            <div>Total: <span id="total">$300</span></div>
			<button className="primary-btn proceed-btn">Proceed to payment</button>
            </div>
		</div>
	);
};

export default NavCart;
