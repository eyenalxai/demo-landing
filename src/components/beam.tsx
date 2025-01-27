"use client"

import {
	Anchor,
	Bird,
	Bug,
	Camera,
	Cloud,
	Compass,
	Crown,
	Diamond,
	Fish,
	Flame,
	Flower2,
	Globe,
	Heart,
	Leaf,
	Moon,
	Music,
	Palette,
	Rocket,
	Sparkles,
	Star,
	Sun,
	Trees,
	Umbrella,
	Wind
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
	const div8Ref = useRef<HTMLDivElement>(null)
	const div9Ref = useRef<HTMLDivElement>(null)
	const div10Ref = useRef<HTMLDivElement>(null)
	const div11Ref = useRef<HTMLDivElement>(null)
	const div12Ref = useRef<HTMLDivElement>(null)
	const div13Ref = useRef<HTMLDivElement>(null)
	const div14Ref = useRef<HTMLDivElement>(null)
	const div15Ref = useRef<HTMLDivElement>(null)
	const div16Ref = useRef<HTMLDivElement>(null)
	const div17Ref = useRef<HTMLDivElement>(null)
	const div18Ref = useRef<HTMLDivElement>(null)
	const div19Ref = useRef<HTMLDivElement>(null)
	const div20Ref = useRef<HTMLDivElement>(null)
	const div21Ref = useRef<HTMLDivElement>(null)
	const div22Ref = useRef<HTMLDivElement>(null)
	const div23Ref = useRef<HTMLDivElement>(null)
	const div24Ref = useRef<HTMLDivElement>(null)

	return (
		<div
			className="relative flex w-full items-center justify-center overflow-hidden p-10"
			ref={containerRef}
		>
			<div className="flex size-full max-h-[400px] max-w-3xl flex-col items-stretch justify-between gap-8">
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div1Ref} className={cn("bg-background")}>
						<Anchor className="size-full" />
					</Circle>
					<Circle ref={div8Ref} className={cn("bg-background")}>
						<Star className="size-full" />
					</Circle>
					<Circle ref={div13Ref} className={cn("bg-background")}>
						<Bird className="size-full" />
					</Circle>
					<Circle ref={div14Ref} className={cn("bg-background")}>
						<Bug className="size-full" />
					</Circle>
					<Circle ref={div5Ref} className={cn("bg-background")}>
						<Compass className="size-full" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div15Ref} className={cn("bg-background")}>
						<Camera className="size-full" />
					</Circle>
					<Circle ref={div2Ref} className={cn("bg-background")}>
						<Flower2 className="size-full" />
					</Circle>
					<Circle ref={div9Ref} className={cn("bg-background")}>
						<Heart className="size-full" />
					</Circle>
					<Circle ref={div16Ref} className={cn("bg-background")}>
						<Diamond className="size-full" />
					</Circle>
					<Circle ref={div17Ref} className={cn("bg-background")}>
						<Flame className="size-full" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div18Ref} className={cn("bg-background")}>
						<Globe className="size-full" />
					</Circle>
					<Circle ref={div19Ref} className={cn("bg-background")}>
						<Leaf className="size-full" />
					</Circle>
					<Circle ref={div4Ref} className={cn("bg-background", "size-16")}>
						<Crown className="size-full" />
					</Circle>
					<Circle ref={div20Ref} className={cn("bg-background")}>
						<Music className="size-full" />
					</Circle>
					<Circle ref={div21Ref} className={cn("bg-background")}>
						<Sparkles className="size-full" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div10Ref} className={cn("bg-background")}>
						<Sun className="size-full" />
					</Circle>
					<Circle ref={div22Ref} className={cn("bg-background")}>
						<Trees className="size-full" />
					</Circle>
					<Circle ref={div6Ref} className={cn("bg-background")}>
						<Palette className="size-full" />
					</Circle>
					<Circle ref={div23Ref} className={cn("bg-background")}>
						<Umbrella className="size-full" />
					</Circle>
					<Circle ref={div24Ref} className={cn("bg-background")}>
						<Wind className="size-full" />
					</Circle>
				</div>
				<div className="flex flex-row items-center justify-between">
					<Circle ref={div3Ref} className={cn("bg-background")}>
						<Fish className="size-full" />
					</Circle>
					<Circle ref={div11Ref} className={cn("bg-background")}>
						<Moon className="size-full" />
					</Circle>
					<Circle ref={div12Ref} className={cn("bg-background")}>
						<Cloud className="size-full" />
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
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div8Ref}
				toRef={div9Ref}
				curvature={30}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div9Ref}
				toRef={div10Ref}
				curvature={-40}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div10Ref}
				toRef={div11Ref}
				curvature={50}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div11Ref}
				toRef={div12Ref}
				curvature={-30}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div8Ref}
				toRef={div12Ref}
				curvature={60}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div11Ref}
				curvature={-45}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div9Ref}
				curvature={35}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div10Ref}
				curvature={-55}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div8Ref}
				curvature={40}
			/>

			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div13Ref}
				toRef={div14Ref}
				curvature={25}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div14Ref}
				toRef={div15Ref}
				curvature={-35}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div15Ref}
				toRef={div16Ref}
				curvature={45}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div16Ref}
				toRef={div17Ref}
				curvature={-40}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div17Ref}
				toRef={div18Ref}
				curvature={55}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div18Ref}
				toRef={div19Ref}
				curvature={-30}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div19Ref}
				toRef={div20Ref}
				curvature={35}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div20Ref}
				toRef={div21Ref}
				curvature={-45}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div21Ref}
				toRef={div22Ref}
				curvature={50}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div22Ref}
				toRef={div23Ref}
				curvature={-35}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div23Ref}
				toRef={div24Ref}
				curvature={40}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div13Ref}
				toRef={div24Ref}
				curvature={65}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div14Ref}
				toRef={div19Ref}
				curvature={-50}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div15Ref}
				toRef={div20Ref}
				curvature={45}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div16Ref}
				toRef={div21Ref}
				curvature={-40}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div17Ref}
				toRef={div22Ref}
				curvature={35}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div18Ref}
				toRef={div23Ref}
				curvature={-45}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div13Ref}
				toRef={div4Ref}
				curvature={55}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div16Ref}
				toRef={div4Ref}
				curvature={-60}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div19Ref}
				toRef={div4Ref}
				curvature={40}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div21Ref}
				toRef={div4Ref}
				curvature={-35}
			/>
		</div>
	)
}
