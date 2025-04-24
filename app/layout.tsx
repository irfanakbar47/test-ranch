import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { Navbar, Footer, Cookies } from "@/components";
import Script from "next/script";
import TawkWidget from "./components/TawkWidget";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal'],
  variable: '--font-inter',
	preload: false,
});

export const viewport: Viewport = {
  themeColor: 'white',
}

export const metadata: Metadata = {
  applicationName: "instaProtek",
  metadataBase: new URL(baseUrl),
  authors: [{ name: "{dna:micro}", url: "https://dnamicro.com" }],
  title: {
    default: "instaProtek",
    template: 'instaProtek - %s'
  },
  alternates: {
    canonical: `${baseUrl}`,
    languages: {
      'en-US': '/en-US',
    },
  },
  description: "instaProtek offers nationwide electronic protection with top-rated coverage and 24/7 support. Enjoy affordable, on-demand protection with just a push of a button.",
  openGraph: {
    url: `${baseUrl}`,
    type: "website",
    locale: "en_US",
    siteName: "instaProtek",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'instaProtek',
      }
    ]
  },
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/us/app/instaprotek/id1456989327',
      app_store_id: '1456989326',
    },
    android: {
      package: 'com.instaprotek.app',
      app_name: 'instaProtek',
    },
    web: {
      url: `${baseUrl}`,
      should_fallback: true,
    },
  },
  verification: {
    google: 'google',
    yahoo: 'yahoo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="UA-139720945-1" />
      <body className={inter.className}>
        <Suspense fallback={<></>}>
					<Navbar />
					<main className="relative w-full min-h-screen overflow-hidden scroll-smooth">{children}</main>
					<TawkWidget />
					<Script
						id="equalweb-accessibility"
						strategy="beforeInteractive"
						dangerouslySetInnerHTML={{__html: `window.interdeal={"sitekey":"d4900865fa9f14677bd01bd8f091f8f4",Position:"Left",domains:{js:"https://cdn.equalweb.com/",acc:"https://access.equalweb.com/"},Menulang:"EN",btnStyle:{vPosition:["80%","20%"],scale:["0.5","0.5"],color:{main:"#008950",second:"#ffffff"},icon:{type:7,shape:"circle"}}};function scrollToHash(offset=0,delay=1000){setTimeout(()=>{const hash=window.location.hash;if(hash){const id=hash.replace('#','');const element=document.getElementById(id);if(element){const elementTop=element.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:elementTop-offset,behavior:'smooth'})}}},delay)};function resetScrollPosition(){window.scrollTo(0,0);setTimeout(()=>{window.scrollTo(0,0)},0)};function resetScrollAndScrollToHash(){resetScrollPosition();scrollToHash(50,1000)};window.addEventListener('load',resetScrollAndScrollToHash);window.addEventListener('hashchange',resetScrollAndScrollToHash);(function(doc,head,body){var coreCall=doc.createElement('script');coreCall.src=interdeal.domains.js+'core/5.0.4/accessibility.js';coreCall.defer=!0;coreCall.integrity='sha512-eTUQWRddyiuveqEbmMAHQ8v9FzTkrdWz0Tyr2rbZSUC6JOsmhmyQMXGo1lANZnpINLB1IFuN3u6s7FM296qwYA==';coreCall.crossOrigin='anonymous';coreCall.setAttribute('data-cfasync',!0);body?body.appendChild(coreCall):head.appendChild(coreCall)})(document,document.head,document.body)`}}
					/>
					<Script 
						id="inspectlet-script"
						strategy="beforeInteractive"
						dangerouslySetInnerHTML={{__html: `(function(){window.__insp=window.__insp||[];__insp.push(['wid',817283740]);var ldinsp=function(){if(typeof window.__inspld!="undefined")return;window.__inspld=1;var insp=document.createElement('script');insp.type='text/javascript';insp.async=!0;insp.id="inspsync";insp.src=('https:'==document.location.protocol?'https':'http')+'://cdn.inspectlet.com/inspectlet.js?wid=817283740&r='+Math.floor(new Date().getTime()/3600000);var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(insp,x)};setTimeout(ldinsp,0)})()`}}
					/>
          <Cookies />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
