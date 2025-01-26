import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

const TITLE = "Landing Demo"
const DESCRIPTION = "Demo landing page"

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		type: "website"
	}
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "0 0% 100%" },
		{ media: "(prefers-color-scheme: dark)", color: "222.2 84% 4.9%" }
	]
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"font-sans",
					"antialiased",
					GeistSans.variable,
					GeistMono.variable
				)}
			>
				<div className="absolute inset-0 -z-10 size-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
				<Providers attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<main className={cn("my-12", "p-4", "flex", "justify-center")}>
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
