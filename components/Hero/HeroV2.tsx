'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { FaChevronRight } from "react-icons/fa6";
import { Button, CustomImage } from '@/components';
import { useSmoothScroll } from '@/hooks';
import { IHeroV2Props } from './HeroInterface';

const HeroV2 = (props: IHeroV2Props) => {
	const { subheading, background, heroImg, imgAlt, isRetail, scrollTarget, containerStyle, innerContainerStyle } = props
	const scrollTo = useSmoothScroll();
	const router = useRouter();

	return (
		<section className={`relative overflow-hidden bg-[${background}] ${containerStyle}`}>
			{/* <video autoPlay loop muted preload="none" className="absolute w-full z-[-1]">
				<source src={background} type="video/mp4" />
			</video> */}
			<div className={`maxContent m-auto flex items-center mt-[80px] pt-[40px] flex-col lg:flex-row ${innerContainerStyle} ${isRetail && 'flex-col-reverse justify-end gap-y-[40px] lg:flex-row'}`}>
				<div className='flex flex-col pr-0 lg:mb-10 lg:pr-10'>
					<h1 className={`text-blue-primary1 mb-8 font-semibold lg:leading-[86px] tracking-normal text-center text-1xl md:text-3.5xl lg:text-left lg:text-[53px]`}>
						{isRetail ? (
							<span>
								Drive sales, reviews and customer loyalty in an <span className='font-bold'>INSTANT</span>
							</span>
						) : (
							<span className='flex flex-col'>
								Drive Success with <span className="flex mx-auto text-white bg-insta-gradient px-3 py-2 lg:-ml-3">instaProtek&apos;s Patented</span> Analytics Navigation
							</span>
						)}
					</h1>
					{subheading && (
						<p className={`text-blue-primary1 leading-[30px] tracking-normal mb-[2em] text-sm text-center md:text-lg lg:text-left lg:text-1xl lg:max-w-[35em]`}>
							{isRetail ? (
								<span className='font-extralight'>
									<span className='font-bold'>instaProtek&apos;s</span> app-based customer experience platform combines: Intelligent Analytics, Automated Real Time Product Reviews, Product Guarantee/Warranty Management, and unmatched nationwide coverage into ONE easy-to-use and scalable platform for you and your customers.
								</span>
							) : (
								<span>
									Discover the Power of instaProtek&apos;s Patented Analytics System for Enhanced Product Placement and Detailed Shopper Insights
								</span>
							)}
						</p>
					)}

					<Button
						type="button"
						label="Read More"
						icon={<FaChevronRight />}
						iconPos="right"
						customStyle={`mx-auto mb-[2em] lg:mb-0 lg:ml-0`}
						onClick={() => router.push('/articles/instaprotek-unveils-patented-navigation-system-with-groundbreaking-analytics-capabilities')}
					/>
				</div>

				<CustomImage
					src={heroImg}
					alt={imgAlt}
					width={600}
					height={800}
					className={`${isRetail ? 'w-auto h-[300px] lg:h-[700px]' : 'w-auto h-[500px] md:h-[800px]'}`}
					priority
				/>
			</div>
		</section>
	)
}

export default HeroV2