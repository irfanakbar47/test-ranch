export type TAccordionDataProps = {
	id: string;
	groupId: string;
	title: string;
	content: string | TAccordionDataProps[];
	isParentAccordion?: boolean;
	isChildAccordion?: boolean;
};

export type TAccordionItemProps = {
  item: TAccordionDataProps | null;
  index: any;
  openItems: number[];
  toggleItem: (itemNumber: number) => void;
  height: { [key: number]: string };
  contentRefs: React.MutableRefObject<{ [key: number]: HTMLDivElement | null }>;
};

export type TAccordionProps = {
	activeBtn: string | null;
	searchTerm: string;
	accordionData: TAccordionDataProps[];
};
