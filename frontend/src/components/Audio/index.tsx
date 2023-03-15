import React, { FC, useState } from 'react';
import { Space, Row, Col, Typography } from 'antd';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './index.scss';
import { AudioProps } from './AudioProps';
export const Audio: FC<AudioProps> = props => {
	const { index, srcImage, audioName, audioAuthor, audioTime, heartStatus, listenHeartStatus } = props;
	const [isActiveHeart, setActiveHeart] = useState(heartStatus);
	const handleActiveHeart = () => {
		setActiveHeart(!isActiveHeart);
		if (listenHeartStatus !== undefined) {
			listenHeartStatus(index, isActiveHeart);
		}
	};

	return (
		<Space className="AudioSpace">
			<Row justify="space-between" align="middle">
				<Col>
					<Row justify="start" align="middle" gutter={8}>
						<Col>
							<Avatar className="ImageAudio" shape="square" size={48} />
						</Col>
						<Col>
							<Space direction="vertical" size="small">
								<Typography className="AudioName">{audioName}</Typography>
								<Typography className="AudioAuthor">{audioAuthor}</Typography>
							</Space>
						</Col>
					</Row>
				</Col>
				<Col>
					<Space size="large">
						<FontAwesomeIcon
							className="AudioFavorite"
							onClick={handleActiveHeart}
							icon={!isActiveHeart ? faHeartSolid : faHeartRegular}
						/>
						<Typography className="AudioTime">{audioTime}</Typography>

						<FontAwesomeIcon className="AudioEllipsis " onClick={handleActiveHeart} icon={faEllipsis} />
					</Space>
				</Col>
			</Row>
		</Space>
	);
};
