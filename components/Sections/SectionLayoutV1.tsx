'use client'

import React from 'react'
import { ISectionLayoutV1Props } from './SectionInterface'
import { CustomImage } from '@/components';

const SectionLayoutV1 = (props: ISectionLayoutV1Props) => {
	
	const { id, topTitle, title, description, contentStyle, containerStyle, children, topTitleStyle, titleStyle, descriptionStyle, ref, contentInnerStyle } = props
	
	return (
		<section id={id} ref={ref} className={`relative py-5 lg:py-[3em] lg:overflow-hidden ${containerStyle}`}>
			<div className={`flex mx-auto ${contentStyle}`}>
				<div className={`flex flex-col items-center maxContent text-center ${description ? 'gap-y-4 py-[2em] lg:pb-[5em] lg:gap-y-8' : `pb-[5em]`} ${contentInnerStyle}`}>

					{topTitle && 
						<div className="flex flex-col items-center">
							<h2 className={`text-sm text-blue-primary1 font-bold uppercase md:text-base ${topTitleStyle}`}>
								{topTitle}
							</h2>
							<div className='border-t-2 border-blue-primary1 mt-1 w-20 lg:w-28 '></div>
						</div>
					}

					<div className="flex items-baseline justify-center text-blue-primary1">
						{!title ? (
							<>
								<h2 className='flex items-baseline font-bold text-1xl lg:text-5xl'>
									Power-up with&nbsp;
									<span>
										<CustomImage 
											src="https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png"
											width={270}
											height={50}
											alt="instaProtek Logo"
											style={{ height: `auto` }}
											className={`w-[125px] lg:w-[240px]`}
											priority
										/>
									</span>
								</h2>
							</>
						) : (
							<h3 className={`font-bold text-1xl lg:text-5xl ${titleStyle}`}>
								{title}
							</h3>
						)}
					</div>

					<p className={`font-normal px-10 text-blue-primary1 text-base lg:text-base ${descriptionStyle}`}>
						{description}
					</p>
				</div>
			</div>
			{children}
		</section>
	)
}

export default SectionLayoutV1