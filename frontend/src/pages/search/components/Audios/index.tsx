import React, { FC } from 'react';
import { Space, Row, Col } from 'antd';
import './index.scss';
import { AudiosProps } from './AudiosProps';
import { AudiosRequiredProps } from './AudiosRequiredProps';
import { AudioProps } from '../../../../components/Audio/AudioProps';
import { Audio } from '../../../../components/Audio';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import { addFavorite } from '../../../../app/reducers/audioSlice';
export const Audios: FC<Required<AudiosProps>> = props => {
	const { data, itemNumber } = { ...AudiosRequiredProps, ...props };
	const audios = useSelector((state: RootState) => state.audio);
	const dispatch = useDispatch();

	const toggleHeartStatus = (index: string | number, heartStatus: any) => {
		dispatch(addFavorite({ index: index, heartStatus: heartStatus }));
	};

	return (
		<Space className="AudiosSpace" direction="vertical" size="large">
			<Row>
				{audios.map((currentValue: AudioProps, index: number) => {
					return (
						index <= itemNumber - 1 && (
							<Col key={index} className="LayoutAudioItem" span={24}>
								<Audio
									index={index}
									srcImage={currentValue.srcImage}
									audioName={currentValue.audioName}
									audioAuthor={currentValue.audioAuthor}
									audioTime={currentValue.audioTime}
									heartStatus={currentValue.heartStatus}
									listenHeartStatus={toggleHeartStatus}
								/>
							</Col>
						)
					);
				})}
			</Row>
		</Space>
	);
};
