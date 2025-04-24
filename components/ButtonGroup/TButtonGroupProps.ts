export type TButtonGroupProps = {
	onButtonClick: (id: string) => void;
	buttonData: {
		id: string;
		label: string;
		href: string;
	}[];
}
