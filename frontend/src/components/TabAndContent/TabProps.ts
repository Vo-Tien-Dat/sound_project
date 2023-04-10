import React, { CSSProperties, ReactElement, ReactNode } from 'react';

export interface TabProps {
	className?: string;
	style?: CSSProperties;
	space?: string | number;
	tabPosition: number;
	tabItems: string[];
	children: ReactElement[];
}
