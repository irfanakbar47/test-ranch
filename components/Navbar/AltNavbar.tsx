'use client'

import React from 'react'
import Link from 'next/link'
import { CustomImage } from '@/components';

const AltNavbar = () => {
  return (
    <nav className={"absolute w-full content-center flex lg:block z-10 overflow-hidden bg-white shadow-nav2 text-blue-primary1"}>
      <div className="w-full flex items-center justify-center tablet:justify-between max-w-contentDesktop h-[70px] ml-0 px-3 xl:px-0 sm:mx-auto">
        
          <Link href="#" className='cursor-default'>
            <CustomImage
              src={"https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png"}
              alt="instaProtek Primary Logo"
              width={160}
              height={35}
              priority
            />
          </Link>
      </div>
    </nav>
  );
};

export default AltNavbar;
