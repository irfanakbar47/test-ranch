import React, { ReactNode } from 'react';

export interface IButtonProps {
	type?: "button" | "submit";
	label?: string;
	icon?: React.ReactNode;
	iconPos?: "left" | "right";
	bgColor?: string;
	customStyle?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export type ICustomImageProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
	sizes?: string;
	style?: React.CSSProperties;
	className?: string;
	priority: boolean;
	loading?: "eager" | "lazy";
	onError?: React.ReactEventHandler<HTMLImageElement>;
	onLoad?: React.ReactEventHandler<HTMLImageElement>;
	onClick?: React.ReactEventHandler<HTMLImageElement>;
}

export interface IContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
	sentDate: string;
}

export interface IModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode;
}

interface IReviewOption {
	color: string;
	name: string;
	value: number;
}

export interface IReviewQuestion {
	id: string;
	options: IReviewOption[];
	title: string;
	avg_question_rating: number;
}

export interface IReview {
	id: string;
  timezone: string | undefined;
	created_date: string;
	customer_first_name: string;
	customer_last_name: string;
	rating: number;
	review_message: string;
	review_title: string;
}

export interface IProductReviewData {
	description: string;
	file_path: string;
	id: string;
	is_product_review_allowed: boolean;
	name: string;
	review_questions: IReviewQuestion[];
	avg_rating: number;
	rating_percentage: {
			rating_5: number;
			rating_1: number;
			rating_2: number;
			rating_3: number;
			rating_4: number;
	};
	product_reviews: {
			count: number;
			data: IReview[];
	};
}

export interface IProductReviewParams {
	start: number;
	limit: number;
	sort_column: string;
	sort_direction: string;
}

export interface IRepurchaseProgram {
	name: string;
	order_description: string;
	orderPrice: number;
	orderFilePathImages: {
		imageUrl: string;
	}[];
	order_maximum_quantity: number;
	is_repurchase_program: boolean;
}
