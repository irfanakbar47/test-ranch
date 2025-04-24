export interface IHeroProps {
	subheading?: string | boolean;
	background: string;
	heroTitle: string;
	customTitle?: string;
	scrollTarget?: string;
}

export interface IHeroV2Props {
	subheading?: string | boolean;
	background: string;
	heroImg: string;
	imgAlt: string;
	isRetail?: boolean;
	scrollTarget?: string;
	containerStyle?: string;
	innerContainerStyle?: string;
}