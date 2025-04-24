import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Overview",
  description: "Drive Success with instaProtek's Patented Analytics Navigation. Discover the Power of instaProtek's Patented Analytics System for Enhanced Product Placement and Detailed Shopper Insights."
};

export default function TechnoOverviewLayout({
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