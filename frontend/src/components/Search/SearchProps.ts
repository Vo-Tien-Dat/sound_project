import React from 'react';

export interface SearchProps {
	placeholder?: string;
	getData?: (searchValue: string) => string | void;
}
