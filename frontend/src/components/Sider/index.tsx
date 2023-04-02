import React, { FC, Fragment, useState, useEffect } from 'react';
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

	const [history, setHitory] = useState(window.location.pathname);

	const hanldeRedirection = (url: string | undefined) => {
		if (url !== undefined) {
			navigate(url);
		}
	};

	const handleChangedUrl = (eventUrl: string) => {
		const defaultKey = "hello world"; 
		items !== undefined &&
			items.map((currentValue: MenuItemProps, index: number) => {
				const { key, url } = currentValue;
				const newKey = key || index;
				const newUrl = `/${url}`;
				eventUrl === newUrl && setSelectedItem(newKey);
			});
	};

	const handleSelectedItem = (key: number, url: string | undefined) => {
		setSelectedItem(key);
		hanldeRedirection(url);
	};

	useEffect(() => {
		setHitory(window.location.pathname);
		handleChangedUrl(history);
	}, [history]);

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
