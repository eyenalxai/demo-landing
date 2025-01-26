"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const fontSize = 30
const padding = 15
const height = fontSize + padding

export const Counter = ({ value }: { value: number }) => {
	const numDigits = Math.max(1, Math.floor(Math.log10(Math.abs(value))) + 1)
	const digits = Array.from(
		{ length: numDigits },
		(_, i) => 10 ** (numDigits - i - 1)
	)

	return (
		<div style={{ fontSize }} className={cn("flex", "overflow-hidden")}>
			<AnimatePresence mode="popLayout" initial={false}>
				{digits.map((place) => (
					<motion.div
						key={place}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.2 }}
					>
						<Digit place={place} value={value} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

const Digit = ({ place, value }: { place: number; value: number }) => {
	const valueRoundedToPlace = Math.floor(value / place)
	const prevValue = useRef(valueRoundedToPlace)
	const animatedValue = useSpring(valueRoundedToPlace, {
		stiffness: 500,
		mass: 1.0,
		damping: 25
	})

	const digit = valueRoundedToPlace % 10
	const prevDigit = prevValue.current % 10

	useEffect(() => {
		prevValue.current = valueRoundedToPlace
	}, [valueRoundedToPlace])

	const progress = useTransform(animatedValue, (latest) => {
		return latest - Math.floor(latest)
	})

	return (
		<div className={cn("relative", "w-[1ch]")} style={{ height }}>
			<div
				className={cn(
					"absolute",
					"inset-0",
					"flex",
					"items-center",
					"justify-center"
				)}
			>
				<AnimatePresence mode="popLayout">
					<motion.div
						key={digit}
						initial={{ y: -height, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: height, opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						{digit}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}
