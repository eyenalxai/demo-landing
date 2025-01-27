import { Card } from "@/components/ui/card"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { cn } from "@/lib/utils"

export const CardFlicker = () => (
	<Card className={cn("w-full", "h-full", "p-0", "overflow-hidden")}>
		<FlickeringGrid
			className={cn(
				"relative",
				"inset-0",
				"z-0",
				"[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
			)}
			squareSize={4}
			gridGap={6}
			color="#60A5FA"
			maxOpacity={0.5}
			flickerChance={0.1}
			height={800}
			width={800}
		/>
	</Card>
)
