import React, { ReactNode } from 'react';

export interface CardProps {
	srcImage?: string;
	cardTitle?: string;
	cardDetails?: string;
	children?: string | ReactNode;
	shape?: 'square' | 'circle' | undefined;
}
