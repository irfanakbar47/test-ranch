'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useOs } from "@mantine/hooks";

const AppPage = () => {
  const os = useOs();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const iosUrlScheme = "instaprotek://";
    const androidUrlScheme = "intent://instaprotek#Intent;scheme=http;package=com.instaprotek.app;end";
    const appleAppStoreUrl = "https://apps.apple.com/us/app/instaprotek/id1456989327";
    const googlePlayStoreUrl = "https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en";

    if (os === "ios") {
      window.location.href = iosUrlScheme + window.location.search;
      setTimeout(() => {
        window.location.href = appleAppStoreUrl;
      }, 100);
    } else if (os === "android") {
      window.location.href = androidUrlScheme + window.location.search;
      setTimeout(() => {
        window.location.href = googlePlayStoreUrl;
      }, 100);
    }
  }, [os]);

  const shouldShowGoogleButton = [
    "windows",
    "linux",
    "undetermined",
    "android",
  ].includes(os);
  const shouldShowAppleButton = [
    "windows",
    "linux",
    "undetermined",
    "ios",
    "macos",
  ].includes(os);

  // pre-load the images
  useEffect(() => {
    const imageUrls: string[] = [
      "https://acdn.dnamicro.net/instaprotek/download_on_app_store.png",
      "https://acdn.dnamicro.net/instaprotek/download_on_google_play.png",
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    };

    imageUrls.forEach(preloadImage);
  }, []);

  return (
    <div className="flex flex-col mt-[10em] px-3 md:px-5">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <Image
            height={250}
            width={150}
            src="https://acdn.dnamicro.net/instaprotek/instaprotek-shield.png"
            alt="Additional Image"
            priority
          />
        </div>
        <h1
          className="text-blue-primary1"
          style={{
            marginTop: "44px",
            maxWidth: "32rem",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Tap to download the instaProtek App from App Store or Google Play Store
        </h1>
        <div
          style={{
            marginTop: "44px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            opacity: imagesLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {shouldShowAppleButton && (
            <a
              id="instaprotek_ios"
              href={"https://apps.apple.com/us/app/instaprotek/id1456989327"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
                padding: "0 16px",
              }}
            >
              <Image
                height={75}
                width={272}
                src="https://acdn.dnamicro.net/instaprotek/download_on_app_store.png"
                alt="Apple App Store"
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          )}

          {shouldShowGoogleButton && (
            <a
              id="instaprotek_android"
              href={"https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en_US"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
                padding: "0 16px",
              }}
            >
              <Image
                height={75}
                width={272}
                src="https://acdn.dnamicro.net/instaprotek/download_on_google_play.png"
                alt="Google Play Store"
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppPage;
