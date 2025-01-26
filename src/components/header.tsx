import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const HeaderLink = (props: { text: string }) => (
	<Button variant={"link"} className={cn("text-muted-foreground")}>
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
			<div className={cn("flex", "flex-row")}>
				{headerLinks.map((link) => (
					<HeaderLink key={link} text={link} />
				))}
			</div>
			<div className={cn("flex", "flex-row", "gap-x-4")}>
				<Button variant={"outline"}>Elit</Button>
				<Button>Sapien</Button>
			</div>
		</header>
	)
}
