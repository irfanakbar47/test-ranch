import { Metadata } from "next";

export const metadata: Metadata = {
  title: "instaProtek - Enterprise Terms and Condition",
  description: "Here are our Terms and Conditions."
};

export default function EnterpriseTermsLayout({
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
