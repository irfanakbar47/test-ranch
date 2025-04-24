import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "instaProtek (\"us,\" \"we,\" or \"instaProtek\") is committed to respecting the privacy rights of its customers, visitors and other users of our digital properties and services. This Privacy Policy describes our policies and practices regarding our collection and use of your personal information, and sets forth your privacy rights."
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="pb-[3em]">
      {children}
    </section>
  )
}