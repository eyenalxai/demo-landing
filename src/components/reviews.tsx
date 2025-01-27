import { cn } from "@/lib/utils"
import { User } from "lucide-react"
import { Fragment } from "react"

export const Reviews = () => {
	const reviews = [
		{
			text: "Curvo quaerat carbo aestus voluntarius averto vilicus utrum tenetur texo. Delectus sed denique accusator compono. Talis voluptate causa.",
			author: "Quo Denique",
			role: "Laborum Pauci"
		},
		{
			text: "Pauper cognomen decretum autem. Vinco vulgaris temptatio aestus. Vesco nisi constans capto paulatim.",
			author: "Delectatio Minima",
			role: "Crebro Turbo"
		},
		{
			text: "Defleo thesis corrumpo ustulo copiose coepi alienus. Debeo termes suscipit. Comminor ducimus deficio.",
			author: "Quae Numquam",
			role: "Pecto Thesaurus"
		}
	]

	return (
		<div
			className={cn(
				"h-full",
				"w-full",
				"bg-background",
				"p-4",
				"border",
				"rounded-xl",
				"flex",
				["flex-col", "lg:flex-row"],
				"gap-4"
			)}
		>
			{reviews.map((review, index) => (
				<Fragment key={review.text}>
					<div className={cn("space-y-2")}>
						<p className={cn("text-muted-foreground", "text-justify")}>
							{review.text}
						</p>
						<div className={cn("flex", "flex-col", "items-start", "gap-y-1")}>
							<div
								className={cn("flex", "flex-row", "items-center", "gap-x-2")}
							>
								<User className={cn("text-muted-foreground")} />
								<p className={cn("font-medium", "text-gradient")}>
									{review.author}
								</p>
							</div>
							<p className={cn("text-sm", "text-muted-foreground")}>
								{review.role}
							</p>
						</div>
					</div>
					{index !== reviews.length - 1 && (
						<div
							className={cn(
								[
									["w-full", "h-px"],
									["lg:h-full", "lg:w-px"]
								],
								"bg-primary/20"
							)}
						/>
					)}
				</Fragment>
			))}
		</div>
	)
}
