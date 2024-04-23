import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

export const Head = () => {
	return (
		<NextHead>
			<title>{siteConfig.title}</title>
			<meta key="title" content={siteConfig.title} property="og:title" />
			<meta content={siteConfig.description} property="og:description" />
			<meta content={siteConfig.description} name="description" />
			<meta property="og:type" content={siteConfig.type} />
			<meta name="keywords" content={siteConfig.keywords} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				name="viewport"
			/>
			<link rel="shortcut icon" href={siteConfig.favicon.default} />
			<link rel="icon" type="image/png" sizes="192x192" href={siteConfig.favicon.x192} />
			<link rel="icon" type="image/png" sizes="512x512" href={siteConfig.favicon.x512} />
			<link rel="apple-touch-icon" sizes="180x180" href={siteConfig.favicon.x180} />
			<link rel="icon" type="image/png" sizes="16x16" href={siteConfig.favicon.x16} />
			<link rel="icon" type="image/png" sizes="32x32" href={siteConfig.favicon.x32} />
			<link rel="preconnect" href="/" crossOrigin="anonymous"></link>
			<link rel="manifest" href="/manifest"></link>
		</NextHead>
	);
};
