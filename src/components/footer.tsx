import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { faker } from "@faker-js/faker"

const FooterColumn = () => (
	<div className={cn("flex", "flex-col", "justify-start", "items-start")}>
		<Button
			variant={"link"}
			size={"sm"}
			className={cn("capitalize", "text-base", "px-0")}
		>
			{faker.lorem.word()}
		</Button>
		<div className={cn("flex", "flex-col", "items-start")}>
			<Button
				variant={"link"}
				size={"sm"}
				className={cn("capitalize", "text-sm", "text-muted-foreground", "px-0")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				size={"sm"}
				className={cn("capitalize", "text-sm", "text-muted-foreground", "px-0")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				size={"sm"}
				className={cn("capitalize", "text-sm", "text-muted-foreground", "px-0")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				size={"sm"}
				className={cn("capitalize", "text-sm", "text-muted-foreground", "px-0")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				size={"sm"}
				className={cn("capitalize", "text-sm", "text-muted-foreground", "px-0")}
			>
				{faker.lorem.word()}
			</Button>
		</div>
	</div>
)

export const Footer = () => (
	<footer
		className={cn(
			"grid",
			["grid-cols-2", "md:grid-cols-5"],
			"justify-center",
			"items-start",
			"w-fit",
			["gap-x-12", "gap-y-4"]
		)}
	>
		<div className={cn("col-span-2", "md:col-span-1")}>
			<Logo />
		</div>
		<FooterColumn />
		<FooterColumn />
		<FooterColumn />
		<FooterColumn />
	</footer>
)
