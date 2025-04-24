'use client';

import React, { useEffect, useMemo } from "react";
import { useOs } from "@mantine/hooks";
import { useParams, useRouter } from "next/navigation";
import { brand_details, default_brands } from "@/constants";
import { CustomImage } from "@/components";
import { usePreloadImages } from "@/hooks";
import Link from "next/link";

const AppPage = () => {
  const { brand } = useParams<{ brand: string }>() || { brand: "" };
  const router = useRouter();
  const os = useOs();

  useEffect(() => {
    if (!brand_details[brand] && !default_brands.includes(brand)) {
      router.replace("/");
    }
  }, [brand, router]);

  let brandName = brand;
  if (!brand || typeof brand !== "string" || (!brand_details[brand] && default_brands.includes(brand))) {
    brandName = "a4";
  }

  const { logo = '', imgAlt = '', height = 0, width = 0, isSecondaryLogo = false, resize = false } = useMemo(() => 
    brand_details[String(brandName)] || {}, [brandName]
  );

  const banner = useMemo(() => {
    if (brand === "a14") {
      return {
        src: "https://acdn.dnamicro.net/instaprotek/instaprotek-product_replacement_warranty_banner.png",
        alt: "Product Replacement Warranty",
        resize: true,
      };
    } else if (brand === "otterprotect") {
      return {
        src: "https://acdn.dnamicro.net/instaprotek/otterbox_logo.png",
        alt: "OtterBox Protection Program",
        resize: true,
      };
    } else {
      return {
        src: "https://acdn.dnamicro.net/instaprotek/instaprotek-you-break-it-we-fix-it-guarantee.png",
        alt: "Product Guarantee",
        resize: false,
      };
    }
  }, [brand]);

  const googleLink: string = brand !== "otterprotect"
    ? "https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en_US"
    : "https://play.google.com/store/apps/details?id=com.otterbox.app";
  const appleLink: string = brand !== "otterprotect"
    ? "https://apps.apple.com/us/app/instaprotek/id1456989327"
    : "https://apps.apple.com/us/app/otterprotect/id1609528349";

  const showGoogleButton = useMemo(() => 
    ["windows", "linux", "undetermined", "android"].includes(os), [os]);
  const showAppleButton = useMemo(() => 
    ["windows", "linux", "undetermined", "ios", "macos"].includes(os), [os]);

  const imageUrls = useMemo(() => [
    "https://acdn.dnamicro.net/instaprotek/download_on_app_store.png",
    "https://acdn.dnamicro.net/instaprotek/download_on_google_play.png",
    logo,
    banner.src,
  ], [logo, banner.src]);

  const imagesLoaded = usePreloadImages(imageUrls);

  const imageStyle = {
    opacity: imagesLoaded ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div className="flex flex-col items-center" style={imageStyle}>
      <div className="flex items-center justify-center mb-2">
        {logo && (
          <CustomImage
            className={`h-auto ${resize ? `w-[150px] sm:w-[210px]` : `w-[${width}px]`}`}
            height={height}
            width={width}
            src={logo}
            alt={imgAlt}
            priority
          />
        )}
        {isSecondaryLogo && (
          <>
            {/* Plus icon */}
            <div className="mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ display: "inline-block" }}
              >
                <path d="M20.4853 12H3.51472" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3.51471V20.4853" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <CustomImage
              className="w-full h-auto max-w-[100px]"
              height={100}
              width={100}
              src="https://acdn.dnamicro.net/instaprotek/instaprotek-shield.png"
              alt="instaProtek Shield"
              priority
            />
          </>
        )}
      </div>

      <h1 className="max-w-lg text-center text-[24.5px] leading-[32px] text-blue-primary1 mt-8 mx-4">
        Tap to download the {brandName !== "otterprotect" ? "instaProtek App" : "OtterProtect App"} from {os === "android" ? "Google Play Store" : (os === "ios" || os === "macos") ? "App Store" : "App Store or Google Play Store"}
      </h1>

      <div className="flex gap-4 mt-11">
        {showAppleButton && (
          <Link
            id="instaprotek_ios"
            href={appleLink}
            className="flex justify-center items-center max-w-full px-1"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <CustomImage
              className="w-full h-auto max-w-[272px]"
              height={75}
              width={272}
              src="https://acdn.dnamicro.net/instaprotek/download_on_app_store.png"
              alt="Apple App Store"
              priority
            />
          </Link>
        )}
        {showGoogleButton && (
          <Link
            id="instaprotek_android"
            href={googleLink}
            className="flex justify-center items-center max-w-full px-1"
            rel="noreferrer noopener nofollow"
            target="_blank"
          >
            <CustomImage
              className="w-full h-auto max-w-[272px]"
              height={75}
              width={272}
              src="https://acdn.dnamicro.net/instaprotek/download_on_google_play.png"
              alt="Google Play Store"
              priority
            />
          </Link>
        )}
      </div>

      <div className="mt-[50px] mx-auto">
        {banner.src && (
          <CustomImage
            className={`
              noselect w-full h-auto min-w-[350px] max-w-[600px]
              ${!banner.resize ? "sm:w-[600px] px-0" : "px-6"}
            `}
            height={215.5}
            width={572}
            src={banner.src}
            alt={banner.alt}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default AppPage;
