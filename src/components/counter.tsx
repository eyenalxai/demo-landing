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

export function Counter({ value }: { value: number }) {
	const digits = Math.max(1, Math.floor(Math.log10(Math.abs(value))) + 1)
	const places = Array.from(
		{ length: digits },
		(_, i) => 10 ** (digits - i - 1)
	)

	return (
		<motion.div
			className={cn("flex", "text-3xl", "overflow-hidden")}
			layout
			transition={{ duration: 0.2 }}
		>
			<AnimatePresence mode="popLayout" initial={false}>
				{places.map((place) => (
					<motion.div
						key={place}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						layout
					>
						<Digit place={place} value={value} />
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	)
}

const Digit = ({ place, value }: { place: number; value: number }) => {
	const valueRoundedToPlace = Math.floor(value / place)
	const animatedValue = useSpring(valueRoundedToPlace, {
		stiffness: 500,
		mass: 0.1,
		damping: 25
	})

	useEffect(() => {
		animatedValue.set(valueRoundedToPlace)
	}, [animatedValue, valueRoundedToPlace])

	return (
		<div className={cn("relative", "w-[1ch]", "h-14", "overflow-hidden")}>
			{[...Array(10).keys()].map((i) => (
				<CounterNumber key={i} mv={animatedValue} number={i} />
			))}
		</div>
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
			className="absolute inset-0 flex items-center justify-center"
		>
			{number}
		</motion.span>
	)
}
