import React, { FC } from 'react';
import './index.scss';
import { Space } from 'antd';
import { Card } from '../../../../components/Card';
import { Cards } from '../../../../components/Cards';
import Typography from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
export const Albums: FC = () => {
	const albums = useSelector<RootState, any>(state => state.users.albums);
	return (
		<div className="user-albums-content">
			<Space className="user-albums-content__albums" direction="vertical">
				<div className="user-albums__label">ALBUM </div>
				<Cards>
					{albums.map((albumValue: any, index: number) => {
						const { id, name, author, srcImage } = albumValue;
						return <Card cardTitle={name} />;
					})}
				</Cards>
			</Space>
		</div>
	);
};
