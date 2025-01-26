import { cn } from "@/lib/utils"
import { Circle } from "lucide-react"

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
		<Circle />
		<div
			className={cn(
				"relative",
				"left-[-1.05rem]",
				"h-8",
				"w-[2px]",
				"bg-primary",
				"rotate-[30deg]"
			)}
		/>
		<p className={cn("font-semibold", "text-2xl")}>Iaculis Dui</p>
	</div>
)
