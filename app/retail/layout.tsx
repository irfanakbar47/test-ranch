import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Retail",
  description: "Drive sales, reviews and customer loyalty in an INSTANT. instaProtek's app-based customer experience platform combines: Intelligent Analytics, Automated Real Time Product Reviews, Product Guarantee/Warranty Management, and unmatched nationwide coverage into ONE easy-to-use and scalable platform for you and your customers."
};

export default function RetailLayout({
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
