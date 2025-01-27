"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
	mainCircleSize?: number
	mainCircleOpacity?: number
	numCircles?: number
}

export const Ripple = React.memo(function Ripple({
	mainCircleSize = 210,
	mainCircleOpacity = 0.24,
	numCircles = 8,
	className,
	...props
}: RippleProps) {
	const { resolvedTheme } = useTheme()

	return (
		<div
			className={cn(
				"pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
				className
			)}
			{...props}
		>
			{Array.from({ length: numCircles }, (_, i) => {
				const size = mainCircleSize + i * 70
				const opacity = mainCircleOpacity - i * 0.03
				const animationDelay = `${i * 0.06}s`
				const borderStyle = i === numCircles - 1 ? "dashed" : "solid"

				return (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: It's a demo
						key={i}
						className={
							"absolute animate-ripple rounded-full border bg-neutral-500/50 shadow-xl"
						}
						style={
							{
								width: `${size}px`,
								height: `${size}px`,
								opacity,
								animationDelay,
								borderStyle,
								borderWidth: "1px",
								borderColor: resolvedTheme === "light" ? "#fff" : "#000",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%) scale(1)"
							} as CSSProperties
						}
					/>
				)
			})}
		</div>
	)
})

Ripple.displayName = "Ripple"
