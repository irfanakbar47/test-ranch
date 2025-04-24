import { ReactNode } from "react";

export type ContentSectionType = {
	title: string;
	children: ReactNode;
	id: string;
	style?: string;
}