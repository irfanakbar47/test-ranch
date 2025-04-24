'use client'

import Link from 'next/link';
import React from 'react';
import { CustomImage } from "@/components";
import { footer_items } from '@/constants';
import { useNavigateAndScroll } from '@/hooks';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Footer = () => {
	const today = new Date();
	const year = today.getFullYear();
	const navigateAndScroll = useNavigateAndScroll();
	const pathname = usePathname() ?? '';
	const currentPath = pathname?.split('/')[1];

	const handleMouseClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
		const selection = footer_items
			.flatMap((items) => items.footer_links.flatMap((item) => item.links))
			.find((link) => link.id === targetId);

		navigateAndScroll(event, targetId, selection);
	}

	if((pathname.endsWith("/app")) || currentPath === 'product') {
    return null;
  }

	const getTargetLink = (id: string, href: string): string => {
		if (id === 'footer_support') {
			if (pathname === '/enterprise') {
				return '/support#enterprise';
			} 
			if (pathname === '/retail') {
				return '/support#retail';
			}
		}
		return href;
	};

	return (
		<footer className="bg-blue-primary1 pb-5">
			<div className={"flex flex-col maxContent gap-x-32 py-16 border-b-[1px] border-green-primary1 lg:flex-row"}>
				
				<ul className="flex flex-col gap-y-5">
					{footer_items.map((items, index) => items.footer_logos.map((logo) => (
						<li key={logo.id} className={`${logo.mobile && 'hidden lg:block'}`}>
							<Link href={logo.href} scroll={true}>
								<CustomImage
									src={logo.imgUrl}
									alt={logo.imgAlt}
									width={logo.width}
									height={logo.height}
									className={`${index === 0 && 'w-[120px] mb-10 lg:w-auto lg:mb-0'}`}
									priority
								/>
							</Link>
						</li>
					)))}
				</ul>

				<div className="flex w-full justify-between flex-col gap-y-10 mb-10 lg:flex-row">
					{footer_items.map((items) => items.footer_links.map((item) => (
						<div key={item.id}>
							<Link href={item.href}>
								<h4
									className={`text-white text-base lg:text-lg font-medium mb-4 hover:text-gray-5 transition-colors duration-300 ${item.id !== 'footer_get-in-touch' ? 'cursor-pointer' : 'cursor-default'}`}
								>
									{item.label}
								</h4>
							</Link>
							<ul className="flex flex-col gap-y-3">
								{item.links.map((links) => (
									<li key={links.label} className="flex items-center gap-x-1 text-sm text-gray-5 hover:text-white transition-colors duration-300">
										{
											links.id === 'footer_phone-number' ? <BiSolidPhoneCall size="1.2em" />
												: links.id === 'footer_address-location' && <IoLocationSharp size="1.2em" />
										}
										<Link href={links.href} onClick={(event) => handleMouseClick(event, links.id)}>
											{links.label}
										</Link>
									</li>
								))}
							</ul>
							{item.id === 'footer_get-in-touch' && (
								<ul className="flex gap-x-2 te">
									<li className='footer_socmed-icons'>
										<Link href="https://www.linkedin.com/company/instaprotek/" target="_blank"><FaLinkedinIn size={22} /></Link>
									</li>
								</ul>
							)}
						</div>
					)))}
				</div>

				<div className="flex w-full justify-between flex-col gap-y-10 lg:hidden lg:flex-row">
					<ul className="flex flex-col gap-y-1">
						{footer_items.map((items, index) => items.footer_logos.map((logo) => (
							<li key={logo.id} className={`${!logo.mobile && 'hidden '}`}>
								<Link href={logo.href}>
									<CustomImage
										src={logo.imgUrl}
										alt={logo.imgAlt}
										width={logo.width}
										height={logo.height}
										className={`${index === 0 && 'w-[126px] lg:w-auto lg:mb-0'}`}
										priority
									/>
								</Link>
							</li>
						)))}
					</ul>
				</div>
			</div>

			<div className="flex flex-col-reverse maxContent py-2 text-white justify-center lg:flex-row lg:justify-between gap-1">
				<h5 className='block text-xs text-center'>&copy; {year} instaProtek. All Rights Reserved.</h5>
				<ul className="grid grid-cols-12 lg:flex justify-between items-center gap-1 lg:gap-4 mx-auto lg:mx-0">
					{footer_items.map((item) => {
						const linksLength = item.footer_about_links.length;
						let footerIndex = 0;
						return [...Array(linksLength * 2 - 1)].map((_, i) => (
							<li
								key={i}
								className={`${footerIndex < 3 ? "col-span-2" : "col-span-12"} ${footerIndex === 0 ? "col-start-2" : ""} 
									lg:flex justify-center items-center text-sm text-center`}
							>
								{i % 2 === 0 ? (
									<Link href={getTargetLink(item.footer_about_links[footerIndex].id, item.footer_about_links[footerIndex].href)}>
										<h5 className="text-xs">{item.footer_about_links[footerIndex].label}</h5>
									</Link>
								) : (
									<span className={`${i > 4 ? "hidden lg:flex" : ""}`}>|</span>
								)}
								<span className="hidden">{i % 2 === 0 && footerIndex++}</span>
							</li>
						));
					})}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
