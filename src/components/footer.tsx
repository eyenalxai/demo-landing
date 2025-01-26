import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { faker } from "@faker-js/faker"

const FooterColumn = () => (
	<div className={cn("flex", "flex-col", "justify-start", "gap-y-2")}>
		<p className={cn("capitalize", "text-xl")}>{faker.lorem.word()}</p>
		<div className={cn("flex", "flex-col", "gap-y-2")}>
			<p className={cn("capitalize", "text-sm", "text-muted-foreground")}>
				{faker.lorem.word()}
			</p>
			<p className={cn("capitalize", "text-sm", "text-muted-foreground")}>
				{faker.lorem.word()}
			</p>
			<p className={cn("capitalize", "text-sm", "text-muted-foreground")}>
				{faker.lorem.word()}
			</p>
			<p className={cn("capitalize", "text-sm", "text-muted-foreground")}>
				{faker.lorem.word()}
			</p>
			<p className={cn("capitalize", "text-sm", "text-muted-foreground")}>
				{faker.lorem.word()}
			</p>
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
		<div className={cn("col-span-2", "md:col-span-1")}>
			<Logo />
		</div>
		<FooterColumn />
		<FooterColumn />
		<FooterColumn />
		<FooterColumn />
	</footer>
)
