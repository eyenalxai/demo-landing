"use client"

import { cn } from "@/lib/utils"
import {
	AnimatePresence,
	type MotionValue,
	motion,
	useAnimate,
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
	const [scope, animate] = useAnimate()

	const applyBlur = () =>
		animate(scope.current, { filter: "blur(5px)" }, { duration: 0.1 })
	const removeBlur = () =>
		animate(scope.current, { filter: "blur(0px)" }, { duration: 0.1 })

	return (
		<motion.div
			ref={scope}
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
						onAnimationStart={applyBlur}
						onAnimationComplete={removeBlur}
					>
						<Digit
							place={place}
							value={value}
							onAnimate={applyBlur}
							onRest={removeBlur}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	)
}

const Digit = ({
	place,
	value,
	onAnimate,
	onRest
}: {
	place: number
	value: number
	onAnimate: () => void
	onRest: () => void
}) => {
	const valueRoundedToPlace = Math.floor(value / place)
	const animatedValue = useSpring(valueRoundedToPlace, {
		stiffness: 500,
		mass: 1.0,
		damping: 25
	})

	useEffect(() => {
		let isAnimating = false
		const unsubscribe = animatedValue.on("change", (latest: number) => {
			const velocity = animatedValue.getVelocity()
			if (Math.abs(velocity) > 0.1 && !isAnimating) {
				isAnimating = true
				onAnimate()
			} else if (Math.abs(velocity) <= 0.1 && isAnimating) {
				isAnimating = false
				onRest()
			}
		})

		return () => unsubscribe()
	}, [animatedValue, onAnimate, onRest])

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
