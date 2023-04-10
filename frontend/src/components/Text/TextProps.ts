import { ReactNode } from 'react';
import { CSSProperties } from 'react';
export interface TextProps {
	children?: ReactNode;
	style?: CSSProperties;
	collapse?: boolean;
	lineHeight?: number;
}
