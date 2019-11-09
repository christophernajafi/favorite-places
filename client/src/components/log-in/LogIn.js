import React, { Fragment } from "react";
import "./log-in.css";

const LogIn = (props) => {
	const onChange = (event) => {
		//
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="form-container">
			{/* <h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={onSubmit}>
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
					/>
				</div>
				<input
					type="submit"
					value="Login"
					className="btn btn-primary btn-block"
				/>
			</form> */}
		</div>
	);
};

export default LogIn;
