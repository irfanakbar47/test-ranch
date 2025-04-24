import { HeroV2, PlatformOverview, SectionV8, SectionV9 } from "@/components";
import { customer_support, in_app_marketplace, product_pages, product_registration, service_requests, technology_overview } from "@/constants";

export default function TechnoOverview() {
	return (
		<main className="">
			<HeroV2
				subheading
				imgAlt="instaProtek technology overview banner poster"
				background="white"
				heroImg="https://acdn.dnamicro.net/instaprotek/instaprotek-tech-overview-product-review-page.png"
				containerStyle="pb-10"
			/>
			<SectionV9
				id="technology-overview"
				title="Technology Overview"
				description="Reduce your overhead while offering a quick and streamlined experience for your consumers."
				containerStyle="bg-blue-primary1 pb-[3em] lg:!pt-0"
				titleStyle="!text-white"
				descriptionStyle="!text-white"
				imgUrl="https://acdn.dnamicro.net/instaprotek/instaprotek-tech-overview-section.png"
				imgAlt="Technology Overview"
				data={technology_overview}
				listContainerStyle="!gap-y-10"
				iconStyle={`w-[31px] h-[31px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]`}
			/>
			<PlatformOverview />
			<SectionV8
				id="product-registration"
				title="Product Registration"
				description="Reduce your overhead while offering a quick and streamlined experience for your consumers."
				data={product_registration}
				containerStyle="bg-blue-primary1 pb-[3em] lg:!pt-0"
				titleStyle="!text-white"
				descriptionStyle="!text-white"
				customStyle="!text-white"
				imgHeight={500}
			/>
			<SectionV8
				id="service-requests"
				title="Service Requests"
				description="Transform a frustrating experience for consumers into one of convenience and delight."
				data={service_requests}
				imgHeight={400}
				containerStyle="!pb-0 lg:!pt-0"
			/>
			<SectionV8
				id="customer-support"
				title="Customer Support"
				description="instaProtek&apos;s platform is designed to enable consumers to conveniently connect with customer service and receive personalized product support quickly and efficiently."
				data={customer_support}
				containerStyle="bg-blue-primary1 pb-[3em] lg:!pt-0"
				titleStyle="!text-white"
				descriptionStyle="!text-white"
				customStyle="!text-white"
				imgHeight={250}
			/>
			<SectionV8
				id="in-app-marketplace"
				title="In-App Marketplace"
				data={in_app_marketplace}
				imgHeight={400}
				innerContainerStyle="!justify-center gap-x-20"
				contentInnerStyle="!pb-[2em]"
				containerStyle="!py-10"
			/>
			<SectionV9
				id="product-pages"
				title="Product Pages"
				imgUrl="https://acdn.dnamicro.net/instaprotek/instaprotek-tech-overview-product-page.png"
				imgAlt=""
				data={product_pages}
				customImgStyle="relative w-[300px] h-[300px] rounded-full overflow-hidden"
				containerStyle="bg-blue-primary2 h-auto !pb-0 pt-[3em] lg:pt-[5em]"
				customStyle="!text-blue-primary1"
				contentInnerStyle="!pb-0"
				listContainerStyle="!gap-y-10 max-w-[600px] pt-10 !mb-10 lg:mb-0 lg:pt-20"
				innerContainerStyle="items-center !flex-col lg:items-start lg:!flex-row"
				bigImgStyle="!w-[280px]"
				iconStyle="md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px]"
			/>
		</main>
	);
}