import React, { FC, useState, useEffect, Fragment } from 'react';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import './index.scss';
import { is } from 'immer/dist/internal';
import { SearchProps } from './SearchProps';
export const Search: FC<SearchProps> = props => {
	const [isHiddenXIcon, setHiddenXIcon] = useState(true);
	const [searchValue, setSeachValue] = useState('');
	const { placeholder, getData } = props;

	const handleGetData = () => {
		if (getData !== undefined) {
			getData(searchValue);
		}
	};

	const handleClearText = () => {
		setSeachValue('');
	};

	const handleChangedText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSeachValue(value);
	};

	useEffect(() => {
		if (searchValue.length === 0) {
			setHiddenXIcon(true);
		} else {
			setHiddenXIcon(false);
		}
	}, [searchValue]);

	return (
		<Fragment>
			<div className="DefaultSearchSpace">
				<FontAwesomeIcon icon={faMagnifyingGlass} className="DefaultIconSearch"></FontAwesomeIcon>
				<input
					className="DefaultEditor"
					onChange={handleChangedText}
					value={searchValue}
					placeholder={placeholder}
				/>
				<FontAwesomeIcon
					icon={faX}
					className={classNames('DefaultIconX', { hidden: isHiddenXIcon })}
					onClick={handleClearText}
				></FontAwesomeIcon>
			</div>
			<div>
				
			</div>
		</Fragment>
	);
};