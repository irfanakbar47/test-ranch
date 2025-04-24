import { CustomImage } from "@/components";

interface ErrorProductPageProps {
  message: string;
  isLoadingPage: boolean;
}

const ErrorProductPage = ({ message, isLoadingPage }: ErrorProductPageProps) => {
  return (
    <div className={`relative flex justify-center items-center h-screen w-full transition-opacity transform duration-500 ease-in-out ${isLoadingPage ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}>
      <CustomImage
        className="opacity-50"
        src="https://acdn.dnamicro.net/instaprotek/instaprotek-shield-blank.png"
        alt="blank instaProtek shield"
        width={340}
        height={340}
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-center text-blue-primary1 text-3xl font-bold px-4 pt-4">{message}</h2>
      </div>
    </div>
  );
};

export default ErrorProductPage;
