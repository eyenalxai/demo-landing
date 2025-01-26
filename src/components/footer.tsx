import { cn } from "@/lib/utils"

const Oof = () => (
	<div className={cn("flex", "flex-col", "justify-start", "gap-y-4")}>
		<p>Lorem</p>
		<div className={cn("flex", "flex-col", "gap-y-2")}>
			<p className={cn("text-sm", "text-muted-foreground")}>Lorem</p>
			<p className={cn("text-sm", "text-muted-foreground")}>Ipsum</p>
			<p className={cn("text-sm", "text-muted-foreground")}>Dolor</p>
			<p className={cn("text-sm", "text-muted-foreground")}>Sit</p>
			<p className={cn("text-sm", "text-muted-foreground")}>Amet</p>
		</div>
	</div>
)

export const Footer = () => (
	<footer
		className={cn(
			"grid",
			["grid-cols-2", "md:grid-cols-6"],
			"justify-start",
			"items-start",
			["gap-x-8", "gap-y-4"],
			"w-fit"
		)}
	>
		<p className={cn("text-xl", "font-bold", ["col-span-2", "md:col-span-1"])}>
			Lorem
		</p>
		<Oof />
		<Oof />
		<Oof />
		<Oof />
		<Oof />
	</footer>
)
