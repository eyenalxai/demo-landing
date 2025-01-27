import { cn } from "@/lib/utils"
import { Fragment } from "react"

export const Reviews = () => {
	const reviews = [
		"Curvo quaerat carbo aestus voluntarius averto vilicus utrum tenetur texo. Delectus sed denique accusator compono. Talis voluptate causa.",
		"Pauper cognomen decretum autem. Vinco vulgaris temptatio aestus. Vesco nisi constans capto paulatim.",
		"Defleo thesis corrumpo ustulo copiose coepi alienus. Debeo termes suscipit. Comminor ducimus deficio."
	]

	return (
		<div
			className={cn(
				"bg-background",
				"p-4",
				"border",
				"rounded-xl",
				"flex",
				"flex-row",
				"gap-x-4"
			)}
		>
			{reviews.map((review, index) => (
				<Fragment key={review}>
					<div>
						<p className={cn("text-muted-foreground", "text-justify")}>
							{review}
						</p>
					</div>
					{index !== reviews.length - 1 && (
						<div className={cn("h-full", "w-px", "bg-primary/20")} />
					)}
				</Fragment>
			))}
		</div>
	)
}
