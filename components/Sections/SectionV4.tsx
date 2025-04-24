'use client'

import React from 'react'
import Link from 'next/link'
import { Button, CustomImage } from '@/components';
import { ISectionV4Props } from './SectionInterface'

const SectionV4 = (props: ISectionV4Props) => {
	const { imgUrl, imgAlt, customStyle } = props
	return (
		<section className={`relative overflow-hidden h-screen my-[3em] ${customStyle}`} aria-label={imgAlt}>
			<CustomImage
				src={imgUrl} 
				alt={imgAlt} 
				className="w-full h-full absolute inset-0 object-cover z-[-1]"
				width={5725}
				height={3822}
				priority
			/>

			<div className="relative z-10 h-full flex flex-col justify-center items-center maxContent m-auto">
				<h2 className='text-white text-center text-1xl lg:text-[48px] font-bold lg:leading-[72px] mb-5'>
					Set Your Products <br />Apart from Others
				</h2>
				{/* <Link href="/contact">
					<Button label="Learn More" customStyle="px-2 py-1 lg:px-4 lg:py-2" />
				</Link> */}
			</div>
		</section>
	)
}

export default SectionV4