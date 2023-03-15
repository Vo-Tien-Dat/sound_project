import React, { FC } from 'react';
import './index.scss';

import type { InputProps } from './InputProps';
const Input: FC<InputProps> = () => {
	return (
		<div className="InputComponent">
			<input type="text" className="FormInput" />
			<label className="FormLabel">Name</label>
		</div>
	);
};

export { Input };
