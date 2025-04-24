import { Metadata } from "next";
import { CustomImage } from '@/components';

export const metadata: Metadata = {
    title: "instaProtek",
    description: "instaProtek is a smart electronic protection platform with unmatched nationwide coverage and backed by a top-rated provider as well as reliable 24/7 support. This easy-to-use app allows affordable on-demand protection with the push of a button."
};

export default function AppLayout({
    children,
} : {
    children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-primary1 text-white h-[14px] mt-0"></header>
      <main className="flex flex-1 justify-center mt-5 !min-h-full">{children}</main>
      <footer className="p-4 text-center mb-9">
        <div className="flex items-center justify-center">
          <span className="text-sm font-medium">Powered by:</span>
          <CustomImage 
            className="ml-2"
            src="https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png"
            alt="Powered by instaProtek"
            width={200}
            height={37}
            priority
          />
        </div>
      </footer>
    </div>
  );
}
