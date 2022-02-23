import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {changeColor} from '../featues/theme';

const ChangeColor = () => {
	const [ color, setColor ] = useState("");
	const dispatch = useDispatch();

	return (
		<div>
			<input
				type="text"
				onClick={(event) => {
					setColor(event.target.value);
				}}
			/>
			<button
				onClick={() => {
					dispatch(changeColor(color));
				}}
			>
				ChangeColor
			</button>
		</div>
	);
};

export default ChangeColor;
