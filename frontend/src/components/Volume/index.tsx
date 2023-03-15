import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import './index.scss';
import { Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faVolumeOff,
	faVolumeMute,
	faVolumeHigh,
	faVolumeDown,
	faVolumeLow,
	faVolumeXmark
} from '@fortawesome/free-solid-svg-icons';
import { VOLUME_HIGH, VOLUME_OFF, VOLUME_XMARK, VOLUME_LOW } from '../../constant/constant';
import './index.scss';

export const Volume: FC = () => {
	const [mutedVolume, setMutedVolume] = useState<boolean>(false);
	const [unMutedVolume, setUnMutedVolume] = useState<any>(faVolumeHigh);
	const [volumeValue, setVolumeValue] = useState<string>('50');
	const hanldeMutedSong = () => {
		setMutedVolume(!mutedVolume);
		setVolumeValue('0');
	};

	const handleChangeVolumeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setVolumeValue(event.currentTarget.value);
	};

	useEffect(() => {
		const value: number = Number(volumeValue);
		setMutedVolume(false);
		switch (true) {
			case value === VOLUME_OFF:
				setUnMutedVolume(faVolumeOff);
				break;
			case value <= VOLUME_LOW && value > VOLUME_OFF:
				setUnMutedVolume(faVolumeLow);
				break;
			case value <= VOLUME_HIGH && value > VOLUME_LOW:
				setUnMutedVolume(faVolumeHigh);
				break;
		}
	}, [volumeValue]);

	return (
		<Space>
			<Space direction="horizontal" align="center">
				<FontAwesomeIcon icon={mutedVolume ? faVolumeXmark : unMutedVolume} onClick={hanldeMutedSong} />
				<div className="VolumeControl">
					<input
						type="range"
						name="vol"
						min="0"
						max="50"
						value={volumeValue}
						className="VolumeProgressBar"
						onChange={handleChangeVolumeValue}
					></input>
				</div>
			</Space>
		</Space>
	);
};
