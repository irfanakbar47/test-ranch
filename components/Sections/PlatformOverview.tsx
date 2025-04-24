import React from 'react'
import { CustomImage, SectionLayoutV1 } from '@/components'

const PlatformOverview = () => {
	return (
		<SectionLayoutV1
			id="platform-overview"
			title="Platform Overview"
			containerStyle="!pt-[4em] !pb-0 lg:py-20"
			contentInnerStyle="!pb-[2em] lg:!pb-[5em]"
		>
			<div className="relative flex justify-center maxContent h-[640px] md:h-[750px] lg:h-[650px] xl:h-[800px]">
				<div className="absolute w-full h-full">
					<p className="platform-circle left-6 top-64 md:left-10 md:top-80 lg:top-20">Simplify service request by IMEI or Serial Number</p>
					<p className="platform-circle right-6 top-44 md:right-0 md:top-72 lg:top-8">Reporting down to the IMEI or Serial Number level or date range</p>
					<p className="platform-circle right-20 bottom-16 md:right-48 lg:bottom-24 lg:right-32">Data collection, storage, retrieval, reporting</p>
				</div>
				<CustomImage 
					src="https://acdn.dnamicro.net/instaprotek/instaprotek-tech-overview-platform-overview-v2.png"
					alt="instaProtek Platform Overview"
					width={886.2}
					height={500}
					className='w-auto h-[180px] md:h-[300px] lg:h-[350px] xl:h-[500px]'
					priority
				/>
			</div>
		</SectionLayoutV1>
	)
}

export default PlatformOverview