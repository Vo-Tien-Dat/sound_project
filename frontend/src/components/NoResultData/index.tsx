import { Typography } from 'antd';
import React, { FC } from 'react';
import './index.scss';
const NoResultData: FC = () => {
	return (
		<div className="no-result-data-space">
			<div className="no-result-data__content">
				<Typography>NO RESULT DATA</Typography>
			</div>
		</div>
	);
};

export default NoResultData;
