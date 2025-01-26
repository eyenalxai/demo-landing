import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Search, Snowflake, Sun } from "lucide-react"

export const HeaderLink = (props: { text: string }) => (
	<Button variant={"link"} className={cn("text-muted-foreground", "p-0")}>
		{props.text}
	</Button>
)

export const Header = () => {
	const headerLinks = [
		"Consectetur",
		"Adipiscing",
		"Elit",
		"Tincidunt",
		"Lorem"
	]

	return (
		<header
			className={cn("flex", "flex-row", "justify-between", "p-4", "border-b")}
		>
			<Logo />
			<div className={cn(["hidden", "lg:flex"], "flex-row", "gap-x-4")}>
				{headerLinks.map((link) => (
					<HeaderLink key={link} text={link} />
				))}
			</div>
			<div className={cn("flex", "flex-row", "gap-x-4")}>
				<Input
					placeholder={"Search..."}
					className={cn("w-44", ["hidden", "lg:block"])}
				/>
				<Popover>
					<PopoverTrigger asChild>
						<Button className={cn(["block", "lg:hidden"])} variant={"outline"}>
							<Search />
						</Button>
					</PopoverTrigger>
					<PopoverContent className={cn("p-0", "border-0")}>
						<Input
							placeholder={"Search..."}
							className={cn("w-full", ["hidden", "lg:block"])}
						/>
					</PopoverContent>
				</Popover>

				<Button variant={"outline"}>
					<Sun />
					Elit
				</Button>
				<Button>
					<Snowflake />
					Sapien
				</Button>
			</div>
		</header>
	)
}
