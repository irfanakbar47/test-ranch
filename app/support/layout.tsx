import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Support",
  description: "To get started with instaProtek, you have two options: Scan the instaProtek Shield's QR code or Download the app manually: Visit the App Store (for iOS devices) or the Play Store (for Android devices) and search for instaProtek. Download and install the app on your smartphone."
};

export default function SupportLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}