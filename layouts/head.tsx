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
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
			<link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
			<link rel="shortcut icon" href={siteConfig.favicon.default}></link>
			<link rel="icon" type="image/png" sizes="192x192" href={siteConfig.favicon.x192}></link>
			<link rel="icon" type="image/png" sizes="512x512" href={siteConfig.favicon.x512}></link>
			<link rel="apple-touch-icon" sizes="180x180" href={siteConfig.favicon.x180}></link>
			<link rel="icon" type="image/png" sizes="16x16" href={siteConfig.favicon.x16}></link>
			<link rel="icon" type="image/png" sizes="32x32" href={siteConfig.favicon.x32}></link>
			<link rel="preconnect" href="/" crossOrigin="anonymous"></link>
			<link rel="manifest" href="/manifest"></link>
		</NextHead>
	);
};
