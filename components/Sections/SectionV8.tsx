import React from 'react'
import { CustomImage, SectionLayoutV1 } from '@/components'
import { ISectionV8Props } from './SectionInterface'

const SectionV8 = (props: ISectionV8Props) => {
	const { id, title, description, containerStyle, titleStyle, descriptionStyle, customStyle, customImgStyle, data, imgHeight, contentInnerStyle, innerContainerStyle } = props

	return (
		<SectionLayoutV1
			id={id}
			title={title}
			description={description}
			containerStyle={containerStyle}
			titleStyle={titleStyle}
			descriptionStyle={descriptionStyle}
			contentInnerStyle={contentInnerStyle}
		>
			<div className={`maxContent flex justify-evenly text-center flex-col lg:flex-row gap-y-14 ${innerContainerStyle}`}>
				{data.map((item) => (
					<div key={item.id} className={`flex flex-col items-center gap-y-4 lg:gap-y-10 ${customStyle}`}>
						<h3 className='font-bold text-base text-blue-primary1 lg:text-lg'>{item.label}</h3>
						<div className={customImgStyle}>
							<CustomImage 
								src={item.imgUrl}
								alt={item.imgAlt}
								width={886.2}
								height={500}
								style={{ width: `auto`, height: `${imgHeight}px`, objectFit: "cover" }}
								priority
							/>
						</div>
					</div>
				))}
			</div>
		</SectionLayoutV1>
	)
}

export default SectionV8