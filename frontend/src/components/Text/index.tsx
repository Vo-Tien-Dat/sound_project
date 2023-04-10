import React, { FC } from 'react';
import './index.scss';
import classNames from 'classnames';
import { TextProps } from './TextProps';
export const Text: FC<TextProps> = ({ children, style, collapse, lineHeight }) => {
	return (
		<div style={style || {}} className={classNames('ms-text-space', 'ms-collapse-text')}>
			{children}
		</div>
	);
};
