"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { AnimatedBeam } from "@/components/ui/animated-beam"
import { cn } from "@/lib/utils"
import {
	AudioWaveform,
	GraduationCap,
	KeyRound,
	LayoutTemplate,
	Microchip,
	Pill,
	Server
} from "lucide-react"

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

export function AnimatedBeamMultipleOutputDemo({
	className
}: {
	className?: string
}) {
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
			className={cn(
				"relative flex w-full items-center justify-center overflow-hidden p-10",
				className
			)}
			ref={containerRef}
		>
			<div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
				<div className="flex flex-col justify-center">
					<Circle ref={div7Ref} className={cn("bg-background", "size-24")}>
						<GraduationCap className={cn("size-14")} />
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={div6Ref} className={cn("bg-background", "size-16")}>
						<KeyRound />
					</Circle>
				</div>
				<div className="flex flex-col justify-center gap-2">
					<Circle ref={div1Ref} className={cn("bg-background", "size-12")}>
						<LayoutTemplate />
					</Circle>
					<Circle ref={div2Ref} className={cn("bg-background", "size-14")}>
						<Microchip />
					</Circle>
					<Circle ref={div3Ref} className={cn("bg-background", "size-16")}>
						<Pill />
					</Circle>
					<Circle ref={div4Ref} className={cn("bg-background", "size-18")}>
						<Server />
					</Circle>
					<Circle ref={div5Ref} className={cn("bg-background", "size-20")}>
						<AudioWaveform />
					</Circle>
				</div>
			</div>

			{/* AnimatedBeams */}
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div4Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div7Ref}
				duration={3}
			/>
		</div>
	)
}
