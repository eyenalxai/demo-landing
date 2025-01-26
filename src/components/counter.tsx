import { cn } from "@/lib/utils"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

type CounterProps = {
	from: number
	to: number
	duration: number
	className?: string
}

export const Counter = ({ from, to, duration, className }: CounterProps) => {
	const count = useMotionValue(from)
	const rounded = useTransform(count, (latest) => Math.round(latest))

	useEffect(() => {
		const controls = animate(count, to, { duration: duration })
		return controls.stop
	}, [count, to, duration])

	return <motion.p className={cn(className)}>{rounded}</motion.p>
}
