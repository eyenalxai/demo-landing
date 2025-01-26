"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"

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
		<LayoutGroup>
			<motion.div
				layout
				style={{ fontSize }}
				className={cn("flex", "overflow-hidden")}
			>
				<AnimatePresence mode="popLayout" initial={false}>
					{digits.map((place) => (
						<motion.div
							layout
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
			</motion.div>
		</LayoutGroup>
	)
}

const Digit = ({ place, value }: { place: number; value: number }) => {
	const digit = Math.floor(value / place) % 10

	return (
		<motion.div layout className={cn("relative", "w-[1ch]")} style={{ height }}>
			<motion.div
				layout
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
						layout
						key={digit}
						initial={{ y: -height, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: height, opacity: 0 }}
						transition={{
							duration: 0.2,
							ease: "anticipate"
						}}
					>
						{digit}
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</motion.div>
	)
}
