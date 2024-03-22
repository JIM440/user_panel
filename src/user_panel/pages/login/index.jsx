import React, { useEffect, useState } from "react";
import "./login.css";
import eyeCrossed from "../../assets/icons/eye-crossed.svg";
import eye from "../../assets/icons/eye.svg";
import googleIcon from "../../assets/icons/Google__G__logo.svg";
import appleIcon from "../../assets/icons/apple_logo.svg";
import Navbar from "../../layout/Navigation/navbar";
import { Link } from "react-router-dom";

const LoginComponent = () => {
	const [blurBackground, setBlurBackground] = useState(false);
	return (
		<div>
			<div className="main-login-container">
			<div className="main__center__box">
				<div className="left__login__details">
					<div className="left__sub">
						<h1>Sign In</h1>
						<form onsubmit="SignInAction(event);" className="login__form">
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
									<label
										for="stayLoggedIn"
										className="stay-logged-in"
										>
										<input
											type="checkbox"
											className="sc-gJwTLC ikxBAC"
											id="stayLoggedIn"
										/>
										Stay logged in
									</label>
								</div>
								<a href="./forgotten.html" className="forgotten__pass">
									Forgot password?
								</a>
							</div>
							<input
								type="submit"
								id="submit__login"
								value="Sign in"
								className="primary-btn"
							/>
						</form>
						<span>
							Do not have an account?
							<Link id="register" to="/register">
								Register
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
								<button id="Back-to-shop">
									Return to Shop
								</button>
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

export default LoginComponent;
