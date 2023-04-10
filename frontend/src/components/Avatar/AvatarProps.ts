import { ReactNode } from 'react';

export interface AvatarProps {
	className?: string;
	avatarSrcImage?: string;
	avatarName?: string;
	menuItem?: string[] | ReactNode[];
}
