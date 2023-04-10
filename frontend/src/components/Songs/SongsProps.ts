import { CSSProperties, ReactElement, ReactNode } from 'react';

export interface SongsProps {
	className?: string;
	space?: number | string;
	style?: CSSProperties;
	skeleton?: boolean;
	children?: ReactNode | ReactNode[] | ReactElement[] | any;
}
