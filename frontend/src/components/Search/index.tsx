import React, { FC, useState, useEffect, Fragment, useMemo } from 'react';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './index.scss';
import { is } from 'immer/dist/internal';
import { SearchProps } from './SearchProps';
import { Typography } from 'antd';

export const Search: FC<SearchProps> = props => {
	const [isHiddenXIcon, setHiddenXIcon] = useState(true);
	const [value, setValue] = useState<string>('');
	const { className, style, placeholder, getData } = props;

	const { onChange } = props;

	const handleClearValue = () => {
		setValue('');
		setHiddenXIcon(true);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value: string = event.target.value;
		if (onChange !== undefined) {
			onChange(value);
		}
		setValue(value);
		setHiddenXIcon(!(value.length > 0));
	};

	return (
		<div className={classNames('ms-search-space', className !== undefined && className)}>
			<div className="ms-search-space__parent">
				<FontAwesomeIcon icon={faMagnifyingGlass} className="search-space__icon-search"></FontAwesomeIcon>
				<input
					className="ms-search-space__editor"
					onChange={handleChange}
					value={value}
					placeholder={placeholder}
				/>
				<FontAwesomeIcon
					icon={faX}
					className={classNames('ms-search-space__icon-x', {
						'ms-search-space__icon-x--hidden': isHiddenXIcon
					})}
					onClick={handleClearValue}
				></FontAwesomeIcon>
			</div>
		</div>
	);
};
