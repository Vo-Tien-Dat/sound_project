import { ReactNode } from 'react';

export interface AvatarProps {
	className?: string;
	avatarSrcImage?: string;
	avatarName?: string;
	data?: string[] | ReactNode[];
	onRedirect?: (key: string) => void;
}
