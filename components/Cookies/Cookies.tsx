'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import CookieConsent from 'react-cookie-consent';
import { CustomImage } from '@/components';
import Link from 'next/link';

const Cookies = () => {
  const searchParams = useSearchParams();
  const barcode = searchParams?.get("barcode");
  const isRepurchaseProgram = barcode ? decodeURIComponent(barcode).includes('/repurchaseprogram') : false;

  if (isRepurchaseProgram) return;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="InstaprotekCookie"
      expires={150}
      enableDeclineButton
      buttonClasses="!bg-[linear-gradient(90deg,_rgba(0,210,122,1)_50%,_rgba(80,228,104,1)_100%)] !text-[12px] !text-[#EDF3F9] !rounded-[5px] !px-[15px] !py-[5px] !border !border-wht !font-inter !leading-[28px] !font-semibold transition duration-200 ease-in-out !shadow-md hover:scale-105 hover:!shadow-lg"
      containerClasses="!bg-[#EDF3F9] fixed !left-[20px] !bottom-[20px] !mr-[20px] !w-auto lg:!w-[1080px] rounded-[15px] !z-[9999999999] p-[10px] !flex !items-center flex-col md:flex-row "
      contentClasses="!font-karla !text-[12px] !text-[#3e3e3e] !flex-1 lg:flex-auto"
      declineButtonClasses="!font-inter !text-[12px] md:order-3 !bg-[transparent] !text-[#3e3e3e] !font-semibold !leading-[28px] underline border-blk !rounded-[50px]"
      buttonWrapperClasses="md:px-0 w-full md:w-auto flex md:flex-row-reverse items-center justify-center md:justify-end rcc-btn-container"
    >
      <div className="flex items-center justify-between gap-x-7">
				<CustomImage 
					src="/imgs/cookie.png" 
					alt="Cookie" 
					width={34}
					height={34}
					className='w-[34px] h-auto'
					priority
				/>
        <p className="w-auto !font-inter !tracking-normal max-w-[140ch] mr-[20px] md:mr-[90px] lg:mr-[40px] text-left text-blk font-karla">
					We use cookies to ensure you get the best experience on our website. By continuing to browse, you agree to our use of cookies. Want to know more? Check out our <Link href="https://instaprotek.com/privacy" className='underline'>Privacy Policy</Link>. 
        </p>
      </div>
    </CookieConsent>
  );
};

export default Cookies;
