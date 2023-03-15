import React, { FC, useEffect, useState } from 'react';
import { Space, Col, Row, Typography } from 'antd';
import './index.scss';

import { Audios } from './components/Audios';
import { AudioProps } from '../../components/Audio/AudioProps';
import { Cards } from '../../components/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { audioSlice } from '../../app/reducers/audioSlice';
import { RootState } from '../../app/store';

const data: AudioProps[] = [
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	},
	{
		srcImage: '',
		audioName: 'Set time out',
		audioAuthor: 'adele',
		audioTime: '4:02',
		heartStatus: true
	}
];

export const Search: FC = () => {
	return (
		<Space direction="vertical" size="large" className="SearchSpace">
			<Space className="SearchItemSpace">
				<Row justify="space-between" align="top" gutter={16}>
					<Col span="10">
						<Space direction="vertical">
							<Typography className="Title">Top Results</Typography>
							<Space className="Content"></Space>
						</Space>
					</Col>
					<Col span="14">
						<Space
							direction="vertical"
							style={{
								width: '100%'
							}}
						>
							<Typography className="Title">Audio</Typography>
							<Space className="Content">
								<Audios data={data} itemNumber={4} />
							</Space>
						</Space>
					</Col>
				</Row>
			</Space>

			<Space className="SearchItemSpace">
				<Typography className="Title">Singer</Typography>
				<Space className="Content">
					<Cards />
				</Space>
			</Space>
			<Space className="SearchItemSpace">
				<Typography className="Title">Album</Typography>
				<Space className="Content">hello</Space>
			</Space>
			<Space className="SearchItemSpace">
				<Typography className="Title">Playlist</Typography>
				<Space className="Content">hello</Space>
			</Space>
			<Space className="SearchItemSpace">
				<Typography className="Title">Podcast</Typography>
				<Space className="Content">hello</Space>
			</Space>
			<Space className="SearchItemSpace">
				<Typography className="Title">Podcast</Typography>
				<Space className="Content">hello</Space>
			</Space>
		</Space>
	);
};
