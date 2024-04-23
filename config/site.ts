export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	title: "ผลิตภัณฑ์ประกัน -  Rabbit Life Insurance Public Company Limited",
	description: "ประกัน แรบบิท ไลฟ์ พร้อมช่วยดูแลคุณเสมอในทุกจังหวะชีวิต",
	type: "website",
	keywords: "Rabbit, Rabbit Life, แรบบิท, แรบบิท ไลฟ์, ประกัน แรบบิท ไลฟ์, Rabbit Life Insurance, แรบบิท ไลฟ์ ช่วยดูแลคุณ, ประกันชีวิตคุ้มครองสูง, คุ้มครองสูง, ประกัน, ก้าวกระโดด, พร้อมก้าวกระโดดไปด้วยกัน, ใช้ชีวิต, วางแผนชีวิต, จังหวะชีวิต, กล้าออกไปใช้ชีวิต, เพื่ออนาคต ",
	favicon: {
		default: "/favicon.ico",
		x180: "/icons/apple-touch-icon.png",
		x16: "/icons/favicon-16x16.png",
		x32: "/icons/favicon-32x32.png",
		x192: "/icons/android-chrome-192x192.png",
		x512: "/icons/android-chrome-512x512.png"
	},
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
