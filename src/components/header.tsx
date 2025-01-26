import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Header = () => (
	<header className={cn("flex", "justify-between", "items-center")}>
		<Logo />
		<div className={cn("flex", "gap-2")}>
			<Button
				variant={"link"}
				className={cn("text-sm", "text-muted-foreground")}
			>
				Lorem
			</Button>
			<Button
				variant={"link"}
				className={cn("text-sm", "text-muted-foreground")}
			>
				Ipsum
			</Button>
			<Button
				variant={"link"}
				className={cn("text-sm", "text-muted-foreground")}
			>
				Dolor
			</Button>
			<Button
				variant={"link"}
				className={cn("text-sm", "text-muted-foreground")}
			>
				Sit
			</Button>
			<Button
				variant={"link"}
				className={cn("text-sm", "text-muted-foreground")}
			>
				Amet
			</Button>
		</div>
		<div className={cn("flex", "gap-2")}>
			<Button variant={"ghost"}>Lorem</Button>
			<Button>Ipsum</Button>
		</div>
	</header>
)
