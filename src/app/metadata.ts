import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "OpenGTM - AI + GTM Research Lab",
	description:
		"OpenGTM is the World's Best AI + GTM Research Lab. We build products and open source research for the best minds in AI-native GTM.",
	keywords: [
		"OpenGTM",
		"AI GTM",
		"Go-to-Market",
		"GTM Research",
		"AI-native GTM",
		"PRISMA GTM",
		"GTM Superintelligence",
		"GTM Research Lab",
		"Next.js template",
		"TypeScript",
		"Prisma",
		"PostgreSQL",
		"shadcn/ui",
		"Tailwind CSS",
	],
	authors: [
		{
			name: "Ben Salzman",
			url: "https://www.linkedin.com/company/opengotomarket/",
		},
	],
	creator: "bensalzman",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: "OpenGTM - AI + GTM Research Lab",
		description:
			"OpenGTM is the World's Best AI + GTM Research Lab. We build products and open source research for the best minds in AI-native GTM.",
		siteName: "OpenGTM",
	},
	twitter: {
		card: "summary_large_image",
		title: "OpenGTM - AI + GTM Research Lab",
		description:
			"OpenGTM is the World's Best AI + GTM Research Lab. We build products and open source research for the best minds in AI-native GTM.",
		creator: "@bensalzman",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/opengtm.jpeg",
		apple: "/opengtm.jpeg",
	},
};
