export interface SideNavbarSectionInterface {
	id: string;
	title: string;
}

export interface SideNavbarInterface {
	sections: SideNavbarSectionInterface[];
	activeSection: string;
}