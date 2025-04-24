'use client'

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CustomImage } from "@/components";

const AltFooter = () => {
  const searchParams = useSearchParams();
  const barcode = searchParams?.get("barcode");
	const isRepurchaseProgram = barcode ? decodeURIComponent(barcode).includes('/repurchaseprogram') : false;

	return (
		<footer className={`bg-[#f0f2f4] ${isRepurchaseProgram ? 'mt-0 ' : 'mt-16'}`}>
      <div className="flex flex-col gap-y-5 items-center p-[50px]">
        <Link href='#' scroll={true} className='cursor-default'>
          <CustomImage
            src='https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png'
            alt="instaProtek Primary Logo"
            width={200}
            height={37}
            priority
          />
        </Link>
        <p className='text-[13px] leading-[1.15rem] text-center text-[#2c2c2c]'>
          The instaProtek shield is the stamp of quality that you can trust. Shop with peace of mind knowing that if you break it, we fix it.
        </p>
      </div>
		</footer>
	);
};

export default AltFooter;
