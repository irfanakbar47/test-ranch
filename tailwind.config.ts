import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
			screens: {
				tablet: '768px',
			},
      fontFamily: {
        'inter': ['var(--font-inter)'],
      },
			fontSize: {
				'3xs': ['10px', {
					lineHeight: '21px',
					letterSpacing: '0',
				}],
				'2xs': ['11px', {
					lineHeight: '21px',
					letterSpacing: '0',
				}],
				'xs': ['12px', {
					lineHeight: '24px',
					letterSpacing: '0',
				}],
				'sm': ['14px', {
					lineHeight: '24px',
					letterSpacing: '0',
				}],
				'base': ['16px', {
					lineHeight: '24px',
					letterSpacing: '0',
				}],
				'lg': ['18px', {
					lineHeight: '28px',
					letterSpacing: '0',
				}],
				'xl': ['20px', {
					lineHeight: '55px',
					letterSpacing: '0',
				}],
				'1xl': ['24px', {
					lineHeight: '30px',
					letterSpacing: '0',
				}],
				'3.5xl': ['32px', {
					lineHeight: '28px',
					letterSpacing: '0',
				}],
				'3.7xl': ['34px', {
					lineHeight: '28px',
					letterSpacing: '0',
				}],
				'4.5xl': ['40px', {
					lineHeight: '52px',
					letterSpacing: '0',
				}],
				'5xl': ['48px', {
					lineHeight: '55px',
					letterSpacing: '0',
				}],
				'5.5xl': ['52px', {
					lineHeight: '55px',
					letterSpacing: '0',
				}],

			},
			colors: {
				green: {
					'primary1': '#00D27A',
					'primary2': '#50E468',
				},
				blue: {
					'primary1': '#1F2A44',
					'primary2': '#EDF3F9',
					'5': '#039BE5',
				},
				gray: {
					'5': '#D3D3D3',
					'10': '#343434',
					'15': '#9E9E9E',
					'20': '#404040',
					'25': '#333333',
					'30': '#808080'
				},
				brown: {
					'5': '#8C6239',
				},
				teal: {
					'5': '#26a69a'
				}
			},
			backgroundImage: {
				'insta-gradient': 'linear-gradient(90deg, rgba(0,210,122,1) 50%, rgba(80,228,104,1) 100%);',
				'card-overlay': 'linear-gradient(to bottom, rgba(138, 138, 138, 0) 0%, rgba(86, 86, 86, 0.3) 43%, rgba(86, 86, 86, 0.6) 70%, rgba(38, 38, 38, 1) 100%);',
			},
			width: {
				// DESKTOP
				'contentDesktop': '1320px',
				'resourcesDesktop': '1040px',
				'formDesktop': '800px',
				'heroDesktop': '960px',
				'articlesDesktop': '1320px',

				// TABLET
				'contentTab': '700px',
				'resourcesTab': '1040px',
				'formTab': '800px',
				'articlesTab': '700px',

				// MOBILE
				'contentMobile': '640px',
				'resourcesMobile': '1040px',
				'formMobile': '800px',
				'articlesMobile': '640px',

				// MINI
				'contentMini': '400px',
				'resourcesMini': '1040px',
				'formMini': '800px',
				'articlesMini': '400px',
			},
			maxWidth: {
				// DESKTOP
				'contentDesktop': '1320px',
				// 'contentDesktop': '1100px',
				'resourcesDesktop': '1040px',
				'formDesktop': '800px',
				'heroDesktop': '960px',
				'articlesDesktop': '1320px',

				// TABLET
				'contentTab': '700px',
				'resourcesTab': '1040px',
				'formTab': '800px',
				'articlesTab': '700px',

				// MOBILE
				'contentMobile': '600px',
				'resourcesMobile': '1040px',
				'formMobile': '800px',
				'articlesMobile': '600px',

				// MINI
				'contentMini': '400px',
				'resourcesMini': '1040px',
				'formMini': '800px',
				'articlesMini': '400px',
			},
			backgroundSize: {
				'1': '38em'
			},
			boxShadow: {
				'nav2': '0px 2px 10px rgba(0, 0, 0, 0.3)'
			}
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
