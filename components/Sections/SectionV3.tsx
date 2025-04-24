'use client'

import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Button, CustomImage, SectionLayoutV1 } from '@/components';
import { articles } from '@/data';
import { useSmoothScroll } from '@/hooks';
import { ISectionV3Props } from './SectionInterface';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SectionV3 = (props: ISectionV3Props) => {
	const { btnLabel, containerStyle, description, id, title, topTitle, type } = props;
	
	useSmoothScroll();
	const router = useRouter();
	const [onHover, setOnHover] = useState<number | null>(null);

	const handleMouseOver = (index: number) => {
		setOnHover(index);
	}

	const handleMouseOut = () => {
		setOnHover(null);
	}

	return (
		<SectionLayoutV1
			id={id}
			topTitle={topTitle}
			title={title}
			description={description}
			containerStyle={containerStyle}
		>
			<div className="flex flex-col maxContent">
				<div className="maxArticle flex flex-wrap items-center gap-5 justify-center">
					{articles.map((article, index) => (
						<div key={article.id} className="relative rounded-[20px] overflow-hidden w-[160px] h-[260px] md:w-[240px] md:h-[340px] lg:w-[298px] lg:h-[421px]">
							<Link
								href={`/articles/${article.id}`}
								className="relative flex w-full h-full"
								onMouseOver={() => handleMouseOver(index)}
								onMouseOut={handleMouseOut}
							>
								<CustomImage
									src={article.imgUrl}
									alt={article.imgAlt}
									width={424}
									height={420}
									className={`w-full object-cover m-auto transition-transform duration-500 ease-in-out ${onHover === index ? "scale-105" : ""}`}
									style={{ height: 'inherit' }}
									priority
								/>
								<div className="flex flex-col justify-end px-4 py-5 gap-y-1 absolute bg-card-overlay w-full h-full cursor-pointer">
									<h3 className="text-white text-base font-medium leading-[22px] lg:font-normal lg:leading-[24px] lg:text-lg">
										{article.title}
									</h3>
									<p className="text-gray-5 text-xs font-medium lg:font-normal lg:text-sm">
										{article.date}
									</p>
								</div>
							</Link>
						</div>
					))}
				</div>
				{btnLabel && <Button onClick={() => router.push('/articles')} customStyle='mx-auto mt-10' type={type} label={btnLabel} icon={<FaChevronRight className='ml-2' />} iconPos="right" />}
			</div>
		</SectionLayoutV1>
	)
}

export default SectionV3