import React, { FC } from 'react';
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
		<div className={classNames('menu-item', isSelected ? 'menu-item--active' : 'menu-item--inactive')}>
			{url !== undefined ? (
				<Link to={url}>
					<div className="menu-item__icon">{icon}</div>
					<div className="menu-item__label">{label}</div>
				</Link>
			) : (
				<>
					<div className="menu-item__icon">{icon}</div>
					<div className="menu-item__label">{label}</div>
				</>
			)}
		</div>
	);
};
