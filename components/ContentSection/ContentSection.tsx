import React from 'react';
import { ContentSectionType } from './ContentSectionType';

const ContentSection = (props: ContentSectionType) => {
	const { 
		title, 
		children, 
		id, 
		style 
	} = props;

	return (
		<section id={id}>
			<h2 className={`text-xl font-bold leading-6 py-4 ${style}`}>{title}</h2>
			<div className="space-y-4">
				{children}
			</div>
		</section>
	);
};

export default ContentSection;