import React, { Fragment } from "react";
import "./sign-up.css";

const SignUp = (props) => {
	const onChange = (event) => {
		//
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="form-container">
			{/* <h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={name} onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Confirm Password</label>
					<input
						type="password"
						name="password2"
						value={password2}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn btn-primary btn-block"
				/>
			</form> */}
		</div>
	);
};

export default SignUp;
