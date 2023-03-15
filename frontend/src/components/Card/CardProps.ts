import React, { ReactNode } from 'react';

export interface CardProps {
	srcImage?: string;
	cardTitle?: string;
	children?: string | ReactNode;
	shape?: 'square' | 'circle' | undefined;
}
