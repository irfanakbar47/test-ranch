import { Hero, HeroV2, Partners, SectionV2, SectionV3, SectionV6, PieCharts } from "@/components";
import { solution_suite } from "@/constants";

export default function Retail() {
	return (
		<main className="">
			<HeroV2
				subheading
				background="white"
				heroImg="https://acdn.dnamicro.net/instaprotek/instaprotek-retail-banner-png.png"
				imgAlt="instaProtek retail banner poster"
				isRetail
				scrollTarget="winning-solutions"
			/>
			<SectionV6 />
			<SectionV3
				id="solution-suite"
				title="Solution Suite"
				description="instaProtek's customer experience platform utilizes limited warranty and/or product guarantee programs with product re-marketing, product reviews and intelligent analytics into one easy-to-use and scalable platform."
				isArticle
			/>
			{solution_suite.map((a) => (
				<SectionV2
					key={a.id}
					id={a.id}
					title={a.label}
					description={a.description}
					imgUrl={a.imgUrl}
					imgAlt={a.imgAlt}
					rowReverse={a.rowReverse}
					withList={a.withList}
				/>
			))}
			<PieCharts />
			<Partners />
		</main>
	);
}
