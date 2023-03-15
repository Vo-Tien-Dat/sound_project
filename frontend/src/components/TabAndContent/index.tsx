import React, { FC, useState } from 'react';
import { Space } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { TabProps } from './TabProps';
export const TabAndContent: FC<Required<TabProps>> = props => {
	const { tabPosition, tabItems, children } = props;

	const [tabItemPostion, setTabItemPosition] = useState(tabPosition);

	const handleTabItem = (index: number) => {
		setTabItemPosition(index);
	};

	return (
		<Space direction="vertical" style = {{
			width: '100%',
		}}>
			<Space direction="horizontal" className="ControlSpace">
				{tabItems.map((value: string, index: number) => {
					return (
						<div
							key={index}
							onClick={() => handleTabItem(index)}
							className={classNames('ControlItemSpace', {
								ActiveControlItemSpace: index === tabItemPostion
							})}
						>
							{value}
						</div>
					);
				})}
			</Space>
			<Space>
				{props.children.map((value: any, index: number) => {
					return (
						<div
							className={classNames(
								'ContentSpace',
								index === tabItemPostion ? 'ActiveContentSpace' : 'InActiveContentSpace'
							)}
							key={index}
						>
							{value}
						</div>
					);
				})}
			</Space>
		</Space>
	);
};
