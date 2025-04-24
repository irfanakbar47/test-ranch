import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download App",
  description: "Download the instaProtek App from App Store or Google Play Store."
};

export default function ContactLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section style={{ minHeight: '40vh' }}>
      {children}
    </section>
  )
}
