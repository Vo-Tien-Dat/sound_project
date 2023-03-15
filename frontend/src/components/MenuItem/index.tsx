import React, { FC } from 'react';
import './index.scss';
import { MenuItemProps } from './MenuItemProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
const DefaultMenuItemProps: MenuItemProps = {
	icon: <FontAwesomeIcon icon={faHome} />,
	label: 'items',
	isSelected: false
};

export const MenuItem: FC<MenuItemProps> = props => {
	const { icon, label, isSelected, url } = { ...DefaultMenuItemProps, ...props };
	return (
		<div className={classNames('MenuItemSpace', { MenuItemActive: isSelected })}>
			{url !== undefined ? (
				<Link to={url}>
					<div className="MenuItemIcon">{icon}</div>
					<div className="MenuItemLabel">{label}</div>
				</Link>
			) : (
				<>
					<div className="MenuItemIcon">{icon}</div>
					<div className="MenuItemLabel">{label}</div>
				</>
			)}
		</div>
	);
};
