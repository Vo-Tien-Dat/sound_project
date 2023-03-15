import { MenuProps } from 'antd';
import React from 'react';
export interface InputProps {
	label?: string;
	alt?: string;
	onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
	onError?: () => boolean;
}
