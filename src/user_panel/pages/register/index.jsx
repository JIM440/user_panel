import React, { useEffect, useState } from "react";
import "../login/login.css";
import eyeCrossed from "../../assets/icons/eye-crossed.svg";
import eye from "../../assets/icons/eye.svg";
import googleIcon from "../../assets/icons/Google__G__logo.svg";
import appleIcon from "../../assets/icons/apple_logo.svg";
import Navbar from "../../layout/Navigation/navbar";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
	const [blurBackground, setBlurBackground] = useState(false);
	return (
		<div>
			<div className={blurBackground?"blur-background main-login-container":"main-login-container"}>
			<div className="main__center__box">
				<div className="left__login__details">
					<div className="left__sub">
						<h1>Register</h1>
						<form onsubmit="SignInAction(event);" className="login__form">
							<label for="emailInput" className="bold__label email">
								Name
								<input
									type="text"
									id="nameInput"
									placeholder="e.g. John Doe"
									autocomplete="on"
								/>
								<span className="error__message error__email"></span>
							</label>
							<label for="emailInput" className="bold__label email">
								Email
								<input
									type="email"
									id="emailInput"
									placeholder="e.g. JohnDoe@gmail.com"
									autocomplete="on"
								/>
								<span className="error__message error__email"></span>
							</label>
							<label for="passwordInput" className="bold__label password">
								Password
								<input
									type="password"
									id="passwordInput"
									placeholder="password"
									autocomplete="one"
								/>
								<img
									src={eyeCrossed}
									alt="crossed-eye"
									className="form__icon"
								/>
								<span className="error__message error__password"></span>
							</label>
							<div className="loggedIn__forgot">
								<div className="checkbox-wrapper-2">
									<label for="stayLoggedIn" className="stay-logged-in">
										<input
											type="checkbox"
											className="sc-gJwTLC ikxBAC"
											id="stayLoggedIn"
										/>
										Stay signed in
									</label>
								</div>
								<div class="checkbox-wrapper-46">
									<input class="inp-cbx" id="cbx-46" type="checkbox" />
									<label class="cbx" for="cbx-46">
										<span>
											<svg width="12px" height="10px" viewbox="0 0 12 10">
												<polyline points="1.5 6 4.5 9 10.5 1"></polyline>
											</svg>
										</span>
										<span>
										Agree to &nbsp;
										<a href="./forgotten.html" className="forgotten__pass">
											terms and conditions
										</a>
									</span>
									</label>
								</div>
							</div>
							<input
								type="submit"
								id="submit__register"
								value="Register"
								className="primary-btn"
							/>
						</form>
						<span>
							Already own an account?
							<Link id="register" to='/login'>
								Sign in
							</Link>
						</span>
						<div className="third__party">
							<div className="division__line">
								<div className="line"></div>
								<span>OR</span>
								<div className="line"></div>
							</div>
							<div className="third__party__buttons">
								<button id="sigIn__Google">
									<img
										src={googleIcon}
										alt="google"
										className="third__party__icons"
									/>
									Continue with Google
								</button>
								<button id="sigIn__Apple">
									<img
										src={appleIcon}
										alt="apple"
										className="third__party__icons"
									/>
									Continue with Apple
								</button>
								<button id="Back-to-shop">Return to Shop</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Navbar heroHeight={0} setBlurBackground={setBlurBackground}/>
		</div>
		
	);
};

export default RegisterComponent;
