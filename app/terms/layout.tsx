import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Condition",
  description: "Here are our Terms and Conditions."
};

export default function TermsLayout({
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