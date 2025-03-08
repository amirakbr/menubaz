import React from 'react';
import { IIConProps } from '../commonComponents/commonInterface';

export interface ISearchAreaForm {
	searchQuery: string;
}

export interface ICategoryData {
	label: string;
	Icon: ({ height, width }: IIConProps) => React.JSX.Element;
	articleCount: number;
	isUnique?: boolean;
	additionalClassname?: string;
	name: string;
	route: string;
}

export interface ISubRouteProps {
	params: { category: string };
}
