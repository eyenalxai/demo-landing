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
import Link from "next/link"

export const HeaderLink = (props: { text: string }) => (
	<Link
		href={"/"}
		className={cn("text-primary", "p-0", "text-sm", "hover:underline")}
	>
		{props.text}
	</Link>
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
			className={cn(
				"w-full",
				"fixed",
				"top-0",
				"backdrop-blur",
				"flex",
				"flex-row",
				"justify-between",
				"items-center",
				"p-4",
				"border-b",
				"z-50"
			)}
		>
			<div className={cn("flex", "flex-row", "items-center", "gap-x-8")}>
				<Logo />
				<div
					className={cn(
						["hidden", "lg:flex"],
						"flex-row",
						"items-center",
						"gap-x-4"
					)}
				>
					{headerLinks.map((link) => (
						<HeaderLink key={link} text={link} />
					))}
				</div>
			</div>
			<div className={cn("flex", "flex-row", "gap-x-4")}>
				<Input
					placeholder={"Search..."}
					className={cn("w-44", ["hidden", "lg:block"], "h-8")}
				/>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							size={"sm"}
							className={cn(["block", "lg:hidden"])}
							variant={"outline"}
						>
							<Search />
						</Button>
					</PopoverTrigger>
					<PopoverContent className={cn("p-0", "border-0")}>
						<Input placeholder={"Search..."} className={cn("w-full")} />
					</PopoverContent>
				</Popover>
				<Button size={"sm"} variant={"outline"}>
					<Sun />
					Elit
				</Button>
				<Button size={"sm"}>
					<Snowflake />
					Sapien
				</Button>
			</div>
		</header>
	)
}
