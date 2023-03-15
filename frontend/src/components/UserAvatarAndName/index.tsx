import React, { FC } from 'react';
import { Space, Typography } from 'antd';
import { Row, Col } from 'antd';

import { UserAvatarAndNameProps } from './indexProps';
import { DefaultUserAvatarAndNameProps } from './defaultIndexProps';
import { produceWithPatches } from 'immer';
import { Avatar } from 'antd';
import { AvatarProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.scss';
export const UserAvatarAndName: FC<Partial<UserAvatarAndNameProps>> = ({ children, style, ...props }) => {
	const propsOverride: Partial<UserAvatarAndNameProps> = { ...DefaultUserAvatarAndNameProps, ...props };

	return (
		<Row
			justify={'start'}
			style={style}
			align="middle"
			gutter={propsOverride.spacing}
			className="UserAvatarAndNameSpace"
		>
			<Col>
				<Avatar size={propsOverride.avatarSize} icon={<UserOutlined />} />
			</Col>
			<Col>{children || <Typography className="UserNameTypography">{propsOverride.value}</Typography>}</Col>
		</Row>
	);
};
