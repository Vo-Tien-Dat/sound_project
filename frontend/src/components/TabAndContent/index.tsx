import React, { FC, useState } from 'react';
import { Space } from 'antd';
import classNames from 'classnames';
import './index.scss';
import { TabProps } from './TabProps';
export const TabAndContent: FC<TabProps> = props => {
	const { className, style, tabPosition, tabItems, children, space } = props;

	const [tabItemPostion, setTabItemPosition] = useState(tabPosition);

	const handleTabItem = (index: number) => {
		setTabItemPosition(index);
	};

	return (
		<div
			className={classNames('tab-and-content-space', className !== undefined && className)}
			style={{ ...style, gap: `${8}px` }}
		>
			<div className="tab-control-space">
				{tabItems.map((value: string, index: number) => {
					return (
						<div
							key={index}
							onClick={() => handleTabItem(index)}
							className={classNames('tab-control-space__item', {
								ActiveControlItemSpace: index === tabItemPostion
							})}
						>
							{value}
						</div>
					);
				})}
			</div>
			<div className="content-space">
				{props.children.map((value: any, index: number) => {
					return (
						<div
							className={classNames(
								'content-space__item',
								index === tabItemPostion
									? 'content-space__item--active'
									: 'content-space__item--inactive'
							)}
							key={index}
						>
							{value}
						</div>
					);
				})}
			</div>
		</div>
	);
};
