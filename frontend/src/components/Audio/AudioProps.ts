import React from 'react';

export interface AudioProps {
	srcImage?: string;
	audioName?: string;
	audioAuthor?: string;
	audioTime?: string | number;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	heartStatus: boolean;
	listenHeartStatus?: Function;
	index?: number | string;
}
