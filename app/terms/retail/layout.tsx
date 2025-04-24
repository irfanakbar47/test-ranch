import { Metadata } from "next";

export const metadata: Metadata = {
  title: "instaProtek - Retail Terms and Condition",
  description: "Here are our Terms and Conditions."
};

export default function RetailTermsLayout({
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
