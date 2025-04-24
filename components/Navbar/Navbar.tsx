'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CustomImage } from '@/components';
import { nav_items } from '@/constants'
import { useNavigateAndScroll } from '@/hooks';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigateAndScroll = useNavigateAndScroll();
  const pathname = usePathname() ?? '';
	const currentPath = pathname.split('/')[1];

  const handleMouseEnter = (id: string | null) => {
    setActiveSubMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    const selection = nav_items.flatMap((items) =>
      items.solutions_items?.filter((item) => item.id === activeSubMenu)?.flatMap((item) => item.sub_items)
    ).find((item) => item.id === targetId);

    setActiveSubMenu(null);
    navigateAndScroll(event, targetId, selection);
  };

  const handleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setBurgerOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if((pathname.endsWith("/app")) || currentPath === 'product') {
    return null;
  }

  return (
    <nav
      className={"absolute w-full content-center flex lg:block z-10 overflow-hidden bg-blue-primary1"}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full">
        <div className="flex items-center justify-between max-w-contentDesktop h-[80px] ml-0 px-3 xl:px-0 sm:mx-auto">
					<Link href="/">
						<CustomImage
							src={"https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-inverse.png"}
							alt="instaProtek Primary Logo"
							width={183}
							height={35}
							style={{ width: `183px`, height: `auto` }}
							priority
						/>
					</Link>
					<ul className="hidden h-full gap-[60px] lg:flex">
						{nav_items.map((item) =>
							item.links.map((link) => (
								<li key={link.id} className="contents items-center no-underline text-white font-bold">
									<Link
										href={link.href}
										className={`${link.id === activeSubMenu && link.withSubMenu ? 'underline' : ''} 
																${link.href === pathname && 'text-green-primary2 text-base font-semibold'} 
																text-base tracking-wide font-medium self-center 
																`}
										onMouseEnter={() => handleMouseEnter(link.id)}
									>
										{link.label}
									</Link>
								</li>
							))
						)}
					</ul>
					<div className="contents cursor-pointer lg:hidden" onClick={handleBurger}>
						<RxHamburgerMenu color={burgerOpen ? '#D3D3D3' : '#9E9E9E'} size={30} />
					</div>
        </div>

				{/* Burger Menu */}
				<div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${burgerOpen ? 'max-h-[500px] opacity-100 pb-1' : 'max-h-0 opacity-0'}`}>
					<ul className="flex flex-col items-center">
						{nav_items.map((item) =>
							item.links.map((link) => (
								<Link
									key={link.id}
									href={link.href}
									className={`${link.href === pathname ? 'text-green-primary2' : 'text-white'} w-full h-full text-sm font-bold cursor-pointer py-2 hover:bg-blue-primary2 hover:text-blue-primary1`}
									onClick={handleBurger}
								>
									<li className='w-full text-center'>
										{link.label}
									</li>
								</Link>
							))
						)}
					</ul>
				</div>

				{/* SUBMENU */}
				<div className={`${(activeSubMenu === 'nav-enterprise' || activeSubMenu === 'nav-retail' || activeSubMenu === 'nav-technology-overview') ? 'max-h-[500px] opacity-100 pt-6 pb-9' : 'max-h-0 opacity-0 lg:hidden'} relative flex max-w-contentDesktop m-auto ml-0 lg:m-auto transition-all duration-500 ease-in-out`}>
					<div className="w-full">
						{nav_items.map((items) =>
							items.solutions_items
								.filter((item) => item.id === activeSubMenu)
								.map((item) => (
									<div key={item.id}>
										<ul className="flex flex-wrap pl-0 gap-7">
											{item.sub_items.map((sub_item) => (
												<li key={sub_item.id}>
													<Link href={sub_item.href} onClick={(event) => handleMouseClick(event, sub_item.id)}>
														<div className="group">
															<div className={`relative w-[225px] h-[145px] rounded-[20px] mb-4 overflow-hidden bg-white m-auto transition-transform duration-700 ease-in-out group-hover:scale-110 ${sub_item.id === "product-pages" ? 'p-3' : ''} ${sub_item.id === "platform-overview" ? 'p-3' : ''}`}>
																<CustomImage
																	src={sub_item.imgUrl}
																	alt={sub_item.imgAlt}
																	width={227}
																	height={148}
																	style={{ width: `227px`, height: `auto` }}
																	className="transition-transform duration-700 ease-in-out"
																	priority
																/>
															</div>
															<p className="text-sm text-white transition-colors duration-700 ease-in-out group-hover:text-green-primary2">
																{sub_item.label}
															</p>
														</div>
													</Link>
												</li>
											))}
										</ul>
									</div>
								))
						)}
					</div>
				</div>
      </div>
    </nav>
  );
};

export default Navbar;
