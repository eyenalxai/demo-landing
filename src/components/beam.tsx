"use client"

import {
	Anchor,
	Compass,
	Crown,
	Fish,
	Flower2,
	Palette,
	Rocket
} from "lucide-react"
import type React from "react"
import { forwardRef, useRef } from "react"

import { AnimatedBeam } from "@/components/ui/animated-beam"
import { cn } from "@/lib/utils"

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className
			)}
		>
			{children}
		</div>
	)
})

Circle.displayName = "Circle"

export function Beam() {
	const containerRef = useRef<HTMLDivElement>(null)
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const div3Ref = useRef<HTMLDivElement>(null)
	const div4Ref = useRef<HTMLDivElement>(null)
	const div5Ref = useRef<HTMLDivElement>(null)
	const div6Ref = useRef<HTMLDivElement>(null)
	const div7Ref = useRef<HTMLDivElement>(null)

	return (
		<div
			className="relative flex w-full items-center justify-center overflow-hidden p-10"
			ref={containerRef}
		>
			<div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div1Ref} className={cn("bg-background")}>
						<Anchor className="size-full" />
					</Circle>
					<Circle ref={div5Ref} className={cn("bg-background")}>
						<Compass className="size-full" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div2Ref} className={cn("bg-background")}>
						<Flower2 className="size-full" />
					</Circle>
					<Circle ref={div4Ref} className={cn("bg-background", "size-16")}>
						<Crown className="size-full" />
					</Circle>
					<Circle ref={div6Ref} className={cn("bg-background")}>
						<Palette className="size-full" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div3Ref} className={cn("bg-background")}>
						<Fish className="size-full" />
					</Circle>
					<Circle ref={div7Ref} className={cn("bg-background")}>
						<Rocket className="size-full" />
					</Circle>
				</div>
			</div>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				reverse
			/>
		</div>
	)
}
