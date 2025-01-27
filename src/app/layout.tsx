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
				/* eslint-disable-next-line tailwindcss/no-contradicting-classname */
				className={cn(
					"font-sans",
					"antialiased",
					GeistSans.variable,
					GeistMono.variable,
					"bg-[linear-gradient(to_right,hsl(var(--border))_0.1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_0.1px,transparent_1px)]",
					"bg-[size:6rem_3.708rem]"
				)}
			>
				<Providers attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<main className={cn("my-48", "p-4", "flex", "justify-center")}>
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
