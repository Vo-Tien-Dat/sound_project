import React, { ReactNode } from 'react';

export interface TypographyProps {
	style?: ReactNode;
	fontSize?: number;
	fontWeight?: number;
	color?: number;
	overflow?: '' | '' | '';
	children?: ReactNode;
	content?: string;
	lineNumber?: number;
}
