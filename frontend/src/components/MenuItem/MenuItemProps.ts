import { ReactNode } from 'react';

export interface MenuItemProps {
	label?: string;
	key?: number;
	icon?: ReactNode;
	isSelected?: boolean;
	url?: string;
}
