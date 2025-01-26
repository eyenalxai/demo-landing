import { cn } from "@/lib/utils"
import type { PropsWithChildren } from "react"

export function GradientBackground({ children }: PropsWithChildren) {
	return (
		<div className={cn("relative", "w-full")}>
			<div
				className={cn("fixed", "inset-0", "bg-gradient-to-tr", [
					["from-primary-foreground", ["to-primary/20", "dark:to-primary/10"]]
				])}
			/>
			<div className={cn("relative", "z-10")}>{children}</div>
		</div>
	)
}
