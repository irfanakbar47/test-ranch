import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Partner with Us",
  description: "instaProtek has partnered with industry leaders to deliver the most robust, flexible, and comprehensive enterprise device fleet management program."
};

export default function PartnerWithUsLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="py-24 bg-blue-primary2">
      {children}
    </section>
  )
}
