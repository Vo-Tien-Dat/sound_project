import React, { CSSProperties } from 'react';

export interface SearchProps {
	placeholder?: string;
	className?: string;
	style?: CSSProperties;
	space?: number | string;
	getData?: (searchValue: string) => string | void;
}
