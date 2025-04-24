export type ScrollToTopButtonType = {
	showScrollToTop: boolean;
	atBottom: boolean;
	scrollToTop: () => void;
	customStyle?: string;
	customFillStyle?: string;
	customChevronStyle?: string;
}