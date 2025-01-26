import { cn } from "@/lib/utils"
import { Mountain } from "lucide-react"

export const Logo = () => (
	<div className={cn("flex", "flex-row", "gap-x-2")}>
		<Mountain />
		<p className={cn("text-xl", "font-bold", ["col-span-2", "md:col-span-1"])}>
			Lorem
		</p>
	</div>
)
