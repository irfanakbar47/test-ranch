import { IButtonProps } from "@/types/global";

export interface ISectionLayoutV1Props {
	id: string;
	topTitle?: string;
	title?: string;
	description?: string;
	children?: React.ReactNode;
	containerStyle?: string;
	contentStyle?: string;
	topTitleStyle?: string;
	titleStyle?: string;
	descriptionStyle?: string;
	ref?: React.Ref<HTMLDivElement>;
	contentInnerStyle?: string;
}

export interface ISectionV2Props {
	imgUrl: string;
	imgAlt: string;
	id: string;
	title: string;
	description: string;
	rowReverse?: boolean;
	btnLabel?: string;
	containerStyle?: string;
	contentStyle?: string;
	withList?: boolean;
	onButtonClick?: () => void;
}

export interface ISectionV3Props extends ISectionLayoutV1Props, IButtonProps {
	btnLabel?: string;
	containerStyle?: string;
	isArticle?: boolean;
}

export interface ISectionV4Props {
	imgUrl: string;
	imgAlt: string;
	customStyle?: string;
}

export interface ISectionV8Props extends ISectionLayoutV1Props {
	data: Array<{ [key: string]: any }>;
	customStyle?: string;
	customImgStyle?: string;
	imgHeight?: number;
	innerContainerStyle?: string;
}

export interface ISectionV9Props extends ISectionV8Props {
	imgUrl: string;
	imgAlt: string;
	listContainerStyle?: string;
	iconStyle?: string;
	bigImgStyle?: string;
}