import React, { FC, Fragment, ReactNode } from 'react';
import classNames from 'classnames';
import { SongsProps } from './SongsProps';
import './index.scss';
export const Songs: FC<SongsProps> = props => {
	const { className, style, space, children } = props;

	return (
		<div className={classNames('songs-space', className)} style={{ ...style, gap: `${space || 4}px` }}>
			{children !== undefined
				? children.map((currentElement: ReactNode, index: number) => {
						return (
							<div key={index} className="songs-space-item">
								{currentElement}
							</div>
						);
				  })
				: children}
		</div>
	);
};
