import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const FooterLink = (props: { text: string }) => (
	<Link
		href={"/"}
		className={cn("text-muted-foreground", "p-0", "text-sm", "hover:underline")}
	>
		{props.text}
	</Link>
)

export const Footer = () => {
	const footerLinks = {
		aliquam: [
			"Tergeo",
			"Adficio",
			"Villis",
			"Theatrum",
			"Vorago",
			"Tantillus",
			"Repundiandae",
			"Spectaculum"
		],
		justo: ["Tepesco", "Demergo", "Utique", "Ago", "Depulso"],
		mollis: ["Desino", "Summisse", "Vulgaris", "Autus", "Curriculum"],
		lectus: ["Conicio", "Volubilis"]
	}

	return (
		<footer className={cn("p-4", "border-t", "flex", "flex-col", "gap-y-4")}>
			<Logo />
			<div
				className={cn(
					"flex",
					"flex-row",
					"flex-wrap",
					"items-start",
					"justify-start",
					"gap-12"
				)}
			>
				{Object.entries(footerLinks).map(([title, links]) => (
					<div
						key={title}
						className={cn(
							"flex",
							"flex-col",
							"items-start",
							"justify-start",
							"gap-y-2"
						)}
					>
						<p className={cn("font-semibold", "capitalize", "text-sm")}>
							{title}
						</p>
						{links.map((link) => (
							<FooterLink key={link} text={link} />
						))}
					</div>
				))}
			</div>
		</footer>
	)
}
