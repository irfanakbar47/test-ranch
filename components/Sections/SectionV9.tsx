import React from 'react'
import { CustomImage, SectionLayoutV1 } from '@/components'
import { ISectionV9Props } from './SectionInterface'

const SectionV9 = (props: ISectionV9Props) => {
	const {id, imgUrl, imgAlt, title, description, containerStyle, titleStyle, descriptionStyle, customStyle, data, contentInnerStyle, listContainerStyle, iconStyle, innerContainerStyle, bigImgStyle} = props

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
			<div className={`maxContent flex justify-evenly items-center lg:items-start flex-col-reverse lg:flex-row ${innerContainerStyle}`}>
				<ul className={`flex flex-col gap-y-4 ${listContainerStyle}`}>
					{data.map((item) => (
					<li key={item.id} className={`flex items-center gap-x-4 text-white ${customStyle}`}>
						<CustomImage 
							src={item.iconUrl}
							alt={item.iconAlt}
							width={24}
							height={24}
							className={iconStyle}
							priority
						/>
						<p className="text-sm lg:text-lg">
							{item.description}
						</p>
					</li>
					))}
				</ul>
				<CustomImage 
					src={imgUrl}
					alt={imgAlt}
					width={467}
					height={510}
					className={`w-[467px] h-auto lg:w-auto lg:h-[500px] ${bigImgStyle}`}
					priority
				/>
			</div>
		</SectionLayoutV1>
	)
}

export default SectionV9