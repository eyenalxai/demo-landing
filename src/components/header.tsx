import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { faker } from "@faker-js/faker"

export const Header = () => (
	<header className={cn("flex", "justify-between", "items-center")}>
		<Logo />
		<div className={cn("flex", "gap-2")}>
			<Button
				variant={"link"}
				className={cn("capitalize", "text-sm", "text-muted-foreground")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				className={cn("capitalize", "text-sm", "text-muted-foreground")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				className={cn("capitalize", "text-sm", "text-muted-foreground")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				className={cn("capitalize", "text-sm", "text-muted-foreground")}
			>
				{faker.lorem.word()}
			</Button>
			<Button
				variant={"link"}
				className={cn("capitalize", "text-sm", "text-muted-foreground")}
			>
				{faker.lorem.word()}
			</Button>
		</div>
		<div className={cn("flex", "gap-2")}>
			<Button variant={"ghost"} className={cn("capitalize")}>
				{faker.lorem.word()}
			</Button>
			<Button className={cn("capitalize")}>{faker.lorem.word()}</Button>
		</div>
	</header>
)
