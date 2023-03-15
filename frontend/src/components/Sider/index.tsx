import React, { FC, Fragment, useState } from 'react';
import { Space } from 'antd';
import { SiderProps } from './SiderProps';
import './index.scss';
import { MenuItemProps } from '../MenuItem/MenuItemProps';
import { MenuItem } from '../MenuItem';
import { useNavigate } from 'react-router-dom';

const DefaultSiderProps: Required<SiderProps> = {
	items: [{}],
	initKey: 1
};

export const Sider: FC<SiderProps> = props => {
	const navigate = useNavigate();
	const { items, initKey } = { ...DefaultSiderProps, ...props };
	const [isSelectedItem, setSelectedItem] = useState<number>(initKey);

	const hanldeRedirection = (url: string) => {
		if (url !== undefined) {
			navigate(url);
		}
	};

	const handleSelectedItem = (key: number, url: string | undefined) => {
		setSelectedItem(key);
	};
	return (
		<Space className="SiderSpace" direction="vertical">
			{items !== undefined &&
				items.map((currentItemValue: MenuItemProps, index: number) => {
					const { icon, label, key, url } = currentItemValue;
					return (
						<div onClick={() => handleSelectedItem(key || index, url)}>
							{<MenuItem icon={icon} key={key} label={label} isSelected={isSelectedItem === key} />}
						</div>
					);
				})}
		</Space>
	);
};
