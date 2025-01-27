import { Card } from "@/components/ui/card"
import { Ripple } from "@/components/ui/ripple"
import { cn } from "@/lib/utils"

export const CardRipple = () => (
	<Card
		className={cn(
			"w-full",
			"h-full",
			"flex",
			"relative",
			"justify-center",
			"items-center",
			["bg-neutral-800", "dark:bg-neutral-200"]
		)}
	>
		<p
			className={cn(
				"z-10",
				"whitespace-pre-wrap",
				"text-center",
				"text-5xl",
				"font-medium",
				"tracking-tighter",
				["text-neutral-100", "dark:text-neutral-800"]
			)}
		>
			Dolor
		</p>
		<Ripple />
	</Card>
)
