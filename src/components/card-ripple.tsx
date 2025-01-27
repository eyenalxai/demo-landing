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
			"items-center"
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
				"text-gradient"
			)}
		>
			Dolor
		</p>
		<Ripple />
	</Card>
)
