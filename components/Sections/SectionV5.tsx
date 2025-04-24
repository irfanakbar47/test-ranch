import { device_types } from '@/constants'
import React from 'react'
import { CustomImage, SectionLayoutV1 } from '@/components';

const SectionV5 = () => {
	return (
		<SectionLayoutV1
			id="buy-back-process-section"
			title="instaProtek specializes in the following device types:"
			contentStyle="lg:w-[975px]"
			containerStyle="!pt-0"
		>
			<div className="flex flex-col maxContent gap-y-20">
				<ul className="flex justify-center flex-wrap mx-auto gap-10 lg:gap-x-16">
					{device_types.map((device) => (
						<li key={device.id} className="flex flex-col items-center text-center w-[150px] lg:w-auto">
							<h3 className="text-lg font-normal text-gray-10 mb-5">{device.label}</h3>
							<CustomImage 
								src={device.imgUrl}
								alt={device.imgAlt}
								width={280}
								height={200}
								className='w-auto h-[100px] lg:w-auto lg:h-[200px]'
								priority
							/>
						</li>
					))}
				</ul>
				<CustomImage 
					src="https://acdn.dnamicro.net/instaprotek/instaprotek-enterprise-buy-back-process.png"
					alt="Enterprise Buy Back Process"
					width={1320}
					height={306}
					style={{ width: `auto`, height: `auto` }}
					priority
				/>
			</div>
		</SectionLayoutV1>
	)
}

export default SectionV5