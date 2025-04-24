import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News and Articles"
};

export default function AllArticlesLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="mb-[6em]">
      {children}
    </section>
  )
}
