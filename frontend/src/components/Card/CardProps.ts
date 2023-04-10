import React, { ReactNode } from 'react';

export interface CardProps {
	skeleton?: boolean;
	skeletonActive?: boolean;
	srcImage?: string;
	cardTitle?: string;
	cardDetails?: string;
	children?: string | ReactNode;
	shape?: 'square' | 'circle' | undefined;
}
