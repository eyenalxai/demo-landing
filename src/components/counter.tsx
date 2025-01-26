"use client"

import { cn } from "@/lib/utils"
import {
	AnimatePresence,
	type MotionValue,
	motion,
	useSpring,
	useTransform
} from "framer-motion"
import { useEffect } from "react"

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
		<div
			style={{ fontSize }}
			className={cn("flex", "overflow-hidden", "tabular-nums")}
		>
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
	const animatedValue = useSpring(valueRoundedToPlace, {
		stiffness: 500,
		mass: 1.0,
		damping: 25
	})

	useEffect(() => {
		animatedValue.set(valueRoundedToPlace)
	}, [animatedValue, valueRoundedToPlace])

	return (
		<motion.div
			style={{ height }}
			className={cn("relative", "w-[0.6em]", "overflow-hidden")}
		>
			{[...Array(10).keys()].map((i) => (
				<CounterNumber key={i} mv={animatedValue} number={i} />
			))}
		</motion.div>
	)
}

const CounterNumber = ({ mv, number }: { mv: MotionValue; number: number }) => {
	const y = useTransform(mv, (latest) => {
		const placeValue = latest % 10
		const offset = (10 + number - placeValue) % 10

		let memo = offset * height

		if (offset > 5) {
			memo -= 10 * height
		}

		return memo
	})

	return (
		<motion.span
			style={{ y }}
			className={cn(
				"absolute",
				"inset-0",
				"flex",
				"items-center",
				"justify-center"
			)}
		>
			{number}
		</motion.span>
	)
}
