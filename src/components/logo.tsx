import { cn } from "@/lib/utils"
import { Mountain } from "lucide-react"

export const Logo = () => (
	<div className={cn("flex", "flex-row", "gap-x-2")}>
		<Mountain />
		<p className={cn("capitalize", "text-xl", "font-bold")}>Lorem</p>
	</div>
)
