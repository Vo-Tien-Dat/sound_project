import React, { ReactElement, ReactNode } from 'react';

export interface TabProps {
	tabPosition: number;
	tabItems: string[];
	children: ReactElement[];
}
