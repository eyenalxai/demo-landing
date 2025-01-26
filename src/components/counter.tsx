import { cn } from "@/lib/utils"
import {
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
	return (
		<div className={cn("flex", "text-3xl", "overflow-hidden")}>
			<Digit place={100000} value={value} />
			<Digit place={10000} value={value} />
			<Digit place={1000} value={value} />
			<Digit place={100} value={value} />
			<Digit place={10} value={value} />
			<Digit place={1} value={value} />
		</div>
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
		<div className={cn("relative", "w-[1ch]", "h-14")}>
			{[...Array(10).keys()].map((i) => (
				<Number key={i} mv={animatedValue} number={i} />
			))}
		</div>
	)
}

const Number = ({ mv, number }: { mv: MotionValue; number: number }) => {
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
