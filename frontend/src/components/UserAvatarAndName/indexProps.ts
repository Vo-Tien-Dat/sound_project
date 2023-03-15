import React, { Component, ReactNode } from 'react';

export interface UserAvatarAndNameProps {
	avatarSize: number;
	nameSize: number;
	theme: 'dark' | 'light';
	value: string;
	children: ReactNode;
	spacing: number;
	style: React.CSSProperties;
}
