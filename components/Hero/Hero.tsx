'use client'

import React from 'react'
import { IHeroProps } from './HeroInterface';

const Hero = (props: IHeroProps) => {
	const {subheading, background, heroTitle, customTitle} = props 

	return (
		<section className="relative h-screen overflow-hidden">
			<video autoPlay loop muted playsInline preload="none" className="absolute w-full min-h-screen object-cover z-[-1] md:h-auto">
				<source src={background} type="video/mp4" />
			</video>
			<div className="flex items-end pt-[80px] h-screen bg-black/[41%]">
				<div className="maxContent my-auto">
				<h1 className={`text-white mb-8 text-[24px] leading-[47px] font-semibold tracking-normal !text-center md:text-[32px] lg:text-left lg:font-medium lg:text-[44px] lg:leading-[50px] md:pl-10 xl:pl-0 ${customTitle}`}>
						{heroTitle}
					</h1>
					{subheading && (
						<div className="mx-auto max-w-[50em]">
							<p className="text-white text-base leading-[30px] tracking-normal mb-12 text-center md:text-lg lg:text-1xl lg:mx-0 md:pl-10 xl:pl-0">
								At instaProtek, we specialize in delivering unparalleled service solutions tailored to the unique needs of both enterprises and retailers.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Hero