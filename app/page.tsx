import { Hero, SectionV3, SectionV4 } from "@/components";

export default function Home() {
	return (
		<main className="">
			<Hero
				subheading
				background="https://acdn.dnamicro.net/instaprotek/instaprotek-homepage-banner.mp4"
				heroTitle="Chinese New Year Edi wow!!!!"
			/>
			<SectionV3
				id="article"
				topTitle="News and Articles"
				title="Latest Insights & Updates"
				description="Stay Ahead with Our Latest Articles, News, and Announcements"
				descriptionStyle="w-11/12"
				btnLabel="See all articles"
				containerStyle="!py-0 !my-[5em]"
			/>
			<SectionV4
				imgUrl="https://acdn.dnamicro.net/instaprotek/instaprotek-set-your-products-apart.jpg"
				imgAlt="Set Your Products Apart"
				customStyle="!mb-0"
			/>
		</main>
	);
}