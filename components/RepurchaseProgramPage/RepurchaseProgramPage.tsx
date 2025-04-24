// TODO: Add link and redirect to the app for Android
"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from "next/navigation";
import { useOs } from "@mantine/hooks";
import { Button, CustomImage, Description } from "@/components";
import { usePreloadImages } from "@/hooks";
import { IRepurchaseProgram } from '@/types/global';
import { formatPrice } from '@/utils/formatUtils';

declare global {
  interface Window {
    Android?: { onClicked: () => void };
    webkit?: {
      messageHandlers?: {
        scriptHandler?: { postMessage: (message: string) => void };
      };
    };
  }
}

const RepurchaseProgramPage = (props: IRepurchaseProgram) => {
  const { orderFilePathImages, orderPrice, order_description, name, order_maximum_quantity } = props;

  const searchParams = useSearchParams();
  const barcode = searchParams?.get("barcode");
  const productBarcode = barcode ? barcode.split("/")[0] : "";
  const os = useOs();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [quantityMessage, setQuantityMessage] = useState<string | null>(null);

  let messageTimeout: NodeJS.Timeout | null = null;

  const maxQuantity = order_maximum_quantity === 0 ? 999 : order_maximum_quantity;
  const isMobile = ["android", "ios"].includes(os);

  useEffect(() => {
    if (orderFilePathImages && orderFilePathImages.length > 0) {
      setSelectedImage(orderFilePathImages[0].imageUrl);
      setCurrentIndex(0);
    }
  }, [orderFilePathImages]);

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setQuantityMessage(null);
    } else {
      if(quantityMessage !== "Minimum quantity reached!") {
        setQuantityMessage("Minimum quantity reached!");
        if (messageTimeout) {
          clearTimeout(messageTimeout);
        }
        messageTimeout = setTimeout(() => {
          setQuantityMessage(null);
        }, 10000);
      }
    }
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      setQuantityMessage(null);
    } else {
      if(quantityMessage !== "Maximum quantity reached!") {
        setQuantityMessage("Maximum quantity reached!");
        if (messageTimeout) {
          clearTimeout(messageTimeout);
        }
        messageTimeout = setTimeout(() => {
          setQuantityMessage(null);
        }, 10000);
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsImageLoaded(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : orderFilePathImages.length - 1));
    setSelectedImage(orderFilePathImages[(currentIndex - 1 + orderFilePathImages.length) % orderFilePathImages.length].imageUrl);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < orderFilePathImages.length - 1 ? prevIndex + 1 : 0));
    setSelectedImage(orderFilePathImages[(currentIndex + 1) % orderFilePathImages.length].imageUrl);
  };

  const closeModalIfOutsideClick = (event: React.MouseEvent) => {
    const modal = event.currentTarget;
    if (modal && modal === event.target) {
      toggleModal();
    }
  };

  const handleCheckout = async () => {
    const appUrl = `instaprotek://repurchase-checkout?barcode=${productBarcode}&quantity=${quantity}`;

    if (!isMobile) {
      window.location.href = 'https://instaprotek.com/a4/app'
    } else {
      try {
        if (os === "android") {
          window.Android?.onClicked();
        }
        if (os === "ios") {
          const data = { quantity: quantity, barcode: productBarcode };
          const serializedData = JSON.stringify(data);
          window.webkit?.messageHandlers?.["scriptHandler"]?.postMessage(serializedData);
        }

        window.location.href = appUrl;
      } catch (error) {
        const now = new Date().valueOf();

        setTimeout(function () {
          if (new Date().valueOf() - now > 100) return;

          if (os === 'ios') {
            window.location.href = 'https://apps.apple.com/us/app/instaprotek/id1456989327';
          } 

          if (os === 'android') {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.instaprotek.app&hl=en';
          }
        }, 1500);

        window.location.href = appUrl 
      }
    }
  }

  const imageUrls = useMemo(() => 
    orderFilePathImages.map(image => image.imageUrl)
  ,[orderFilePathImages]);

  const imagesLoaded = usePreloadImages(imageUrls);

  const imageStyle = {
    opacity: imagesLoaded ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div className="maxContent flex flex-col lg:flex-row w-full h-full lg:justify-evenly lg:items-center my-16 py-24 text-blue-primary1" style={imageStyle}>
      <h1 className='font-bold text-2xl text-center lg:hidden'>{name}</h1>
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:gap-x-3 mt-3 mb-5 md:mx-auto lg:m-0">
        {selectedImage && (
          <div className="w-full max-w-56 sm:max-w-max lg:max-w-96">
            <CustomImage
              src={selectedImage as string}
              alt="Selected"
              width={400}
              height={400}
              className='w-full h-60 object-contain sm:h-96 md:w-80 lg:h-[500px] lg:w-[430px] cursor-pointer'
              onClick={toggleModal}
              priority={true}
            />
          </div>
        )}

        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 mx-auto" onClick={closeModalIfOutsideClick}>
            <div className={`bg-gray-400 rounded shadow-lg relative ${isImageLoaded && 'p-1'}`}>
              {isImageLoaded && <Button label="&#x2715;" customStyle="rounded-full text-2xl !px-0 absolute right-0 -top-12" bgColor="bg-transparent" onClick={toggleModal} />}
              <Button label="&#8249;" customStyle="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-0 text-5xl bg-gray-100 rounded-full" bgColor="bg-transparent" onClick={goToPrevious} />
              <Button label="&#8250;" customStyle="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-0 text-5xl bg-gray-100 rounded-full" bgColor="bg-transparent" onClick={goToNext} />
              <CustomImage
                src={selectedImage as string}
                alt="Selected"
                width={800}
                height={800}
                className='w-full h-auto max-w-[800px] max-h-[800px] object-contain p-12'
                priority={true}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-4 lg:flex-col lg:mt-0">
          {orderFilePathImages?.map((image: any, index: number) => (
            <div 
              key={index} 
              onClick={() => handleImageClick(image.imageUrl, index)} 
              className={`relative overflow-hidden flex cursor-pointer w-full max-h-16 max-w-16 border 
                ${selectedImage === image.imageUrl ? 'border-green-primary1 border-[3px]' : 'border-transparent'}`}
            >
              <CustomImage
                src={image.imageUrl}
                alt={`Image ${index}`}
                width={80}
                height={80}
                className='w-full h-full object-contain'
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <h1 className='hidden lg:block font-bold text-2xl'>{name}</h1>
        <h2 className='text-lg font-bold'>{formatPrice(orderPrice)}</h2>
        <div className="flex flex-col py-5">
          <h2 className='text-lg font-bold'>Product Description</h2>
          <Description description={order_description} />
        </div>
        <div className="flex flex-col items-center">
          <div className="fixed sm:relative bottom-0 bg-white w-full gap-y-3 py-5 px-5 lg:p-0 flex flex-col justify-center shadow-nav2 sm:shadow-none sm:px-0 sm:gap-y-2">
            <h3 className="text-base font-bold">Quantity:</h3>
            <div className="flex justify-between flex-row sm:flex-col gap-x-4">
              <div className="relative overflow-hidden flex items-center outline outline-1 w-full max-w-24 sm:max-w-32 rounded-full">
                <Button label="-" customStyle="rounded-full w-full !text-blue-primary1" bgColor="!bg-transparent" onClick={handleDecrement} />
                <span className="text-lg w-full text-center max-w-20">{quantity}</span>
                <Button label="+" customStyle="rounded-full w-full !text-blue-primary1" bgColor="!bg-transparent" onClick={handleIncrement} />
              </div>
              <p className={`text-red-500 text-base mt-2 transition-opacity duration-300 ease-in-out hidden sm:block ${quantityMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {quantityMessage}
              </p>
              <Button label="Proceed to Checkout" customStyle="rounded-full w-full text-sm m-0 sm:mt-2" onClick={handleCheckout} />
            </div>
            <p className={`text-red-500 text-base mt-2 transition-opacity duration-300 ease-in-out block sm:hidden ${quantityMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              {quantityMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepurchaseProgramPage;
