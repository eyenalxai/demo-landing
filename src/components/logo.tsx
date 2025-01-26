import { cn } from "@/lib/utils"

export const Logo = () => (
	<div
		className={cn(
			"flex",
			"flex-row",
			"justify-center",
			"items-center",
			"gap-x-1"
		)}
	>
		<p className={cn("font-semibold", "text-xl")}>Iaculis</p>
	</div>
)
