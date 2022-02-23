import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../featues/user';

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					dispatch(login({ name: 'sindhu', age: 20, email: '@gmail.com' }));
				}}
			>
				Login
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				Logout
			</button>
		</div>
	);
};

export default Login;
