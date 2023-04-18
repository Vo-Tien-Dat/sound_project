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
	const [searchValue, setSeachValue] = useState('');
	const { className, style, placeholder, getData } = props;
	const handleGetData = () => {
		if (getData !== undefined) {
			getData(searchValue);
		}
	};

	const handleClearText = () => {
		setSeachValue('');
		setHiddenXIcon(true);
	};

	const handleChangedText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSeachValue(value);
		setHiddenXIcon(value.length > 0 && false);
	};

	return (
		<div className={classNames('ms-search-space', className !== undefined && className)}>
			<div className="ms-search-space__parent">
				<FontAwesomeIcon icon={faMagnifyingGlass} className="search-space__icon-search"></FontAwesomeIcon>
				<input
					className="ms-search-space__editor"
					onChange={handleChangedText}
					value={searchValue}
					placeholder={placeholder}
				/>
				<FontAwesomeIcon
					icon={faX}
					className={classNames('ms-search-space__icon-x', { hidden: isHiddenXIcon })}
					onClick={handleClearText}
				></FontAwesomeIcon>
			</div>
		</div>
	);
};
