import React, { CSSProperties, ReactElement, ReactNode } from 'react';

export interface CardsProps {
	className?: string;
	children?: ReactNode[] | ReactElement[];
	style?: CSSProperties;
	gapCol?: number | string;
	gapRow?: number | string;
	col?: number | string;
	row?: number | string;
	card?: number | string;
}
