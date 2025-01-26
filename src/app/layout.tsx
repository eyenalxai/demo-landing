import { Header } from "@/components/header"
import "./globals.css"
import { Footer } from "@/components/footer"
import { GradientBackground } from "@/components/gradient-background"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

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
					GeistMono.variable,
					"p-6"
				)}
			>
				<Providers attribute="class" defaultTheme="system" enableSystem>
					<GradientBackground>
						<Header />
						<main
							className={cn(
								["mt-24", "mb-24"],
								"flex",
								"justify-center",
								"gap-y-4"
							)}
						>
							{children}
						</main>
						<Footer />
					</GradientBackground>
				</Providers>
			</body>
		</html>
	)
}
