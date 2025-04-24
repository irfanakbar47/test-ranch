import React from 'react'
import { CustomImage, SectionLayoutV1 } from '@/components';
import Link from 'next/link';

const PieCharts = () => {
	return (
		<SectionLayoutV1
			id="pie-charts-section"
			title="Review Conversion Rate Comparison"
			description="60% success rate, based on customers who register"
			containerStyle="py-0 lg:py-[3em] "
		>
			<div className="flex flex-col max-w-[600px] maxContent gap-y-20">
				<div className="flex justify-center flex-col gap-y-16 lg:flex-row lg:gap-x-32">
					<div className="flex flex-col items-end justify-end gap-y-3 lg:gap-y-10">
						<CustomImage 
							src="https://acdn.dnamicro.net/instaprotek/instaprotek-compare-others-pie.png"
							alt="Compare Others Pie Chart"
							width={550}
							height={300}
							className='w-full h-auto lg:w-auto lg:h-[300px]'
							priority
						/>
						<div className="flex flex-col text-center w-full gap-y-3 lg:pr-[8em]">
							<h3 className="text-xl font-bold text-brown-5 lg:text-3.5xl">Everyone else</h3>
							<p className="text-blue-primary1 text-base lg:text-lg">
								<span className='font-bold'>5-10%</span> of sales result in reviews*
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-y-5 lg:gap-y-10">
						<CustomImage 
							src="https://acdn.dnamicro.net/instaprotek/instaprotek-compare-with-instaprotek.png"
							alt="Compare instaProtek Pie Chart"
							width={550}
							height={300}
							className='w-full h-auto lg:w-auto lg:h-[300px]'
							priority
						/>
						<div className="flex flex-col text-center items-center gap-y-3">
							<CustomImage 
								src="https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png"
								width={183.32}
								height={35}
								alt="instaProtek Logo"
								className='w-[120px] h-auto lg:w-[183.32px]'
								priority
							/>
							<p className="text-blue-primary1 text-base lg:text-lg">
								<span className='font-bold'>60%</span> of instaProtek users leave reviews**
							</p>
						</div>
					</div>
				</div>
				<div className="flex lg:justify-end">
					<div className="flex flex-col text-left text-2xs text-blue-primary1">
						<p>*Source: <Link href="https://websitebuilder.org/blog/online-review-statistics/" className='text-blue-5'>https://websitebuilder.org/blog/online-review-statistics/</Link></p>
						<p>**Based from 30% registration rate</p>
					</div>
				</div>
			</div>
		</SectionLayoutV1>
	)
}

export default PieCharts
