import { IIConProps } from '@/app/commonComponents/commonInterface';
import React from 'react';

export interface IFeedbackSummaryCardProps {
	title: string;
	subtitle: string;
	summary: string;
	icon: ({ height, width }: IIConProps) => React.JSX.Element;
	bg?: string;
}

export interface ICommentCardProps {
	avatar: string;
	comment: string;
	owner: string;
	shopName: string;
}
