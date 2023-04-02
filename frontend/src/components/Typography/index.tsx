import React, { FC } from 'react';
import { TypographyProps } from './TypographyProps';
import './index.scss';
export const Typography: FC<TypographyProps> = ({ children, content, lineNumber, style }) => {
	return <div className="ms-typography">{children || content || ''}</div>;
};
