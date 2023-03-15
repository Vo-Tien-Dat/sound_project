import { UserAvatarAndNameProps } from './indexProps';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';

type UserAvatarAndNameOmit = Omit<UserAvatarAndNameProps, 'children' | 'style'>;
export const DefaultUserAvatarAndNameProps: UserAvatarAndNameOmit = {
	avatarSize: 44,
	nameSize: 16,
	theme: 'light',
	value: 'User Name',
	spacing: 4
};
