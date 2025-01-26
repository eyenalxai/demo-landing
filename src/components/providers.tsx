"use client"

import { MotionConfig } from "framer-motion"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<MotionConfig
				transition={{
					type: "spring",
					duration: 0.5,
					bounce: 0.15
				}}
			>
				{children}
			</MotionConfig>
		</NextThemesProvider>
	)
}
