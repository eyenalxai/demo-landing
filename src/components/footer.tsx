import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { AtSign, Mail, Send } from "lucide-react"
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
			<div
				className={cn("flex", "flex-row", "justify-between", "items-center")}
			>
				<Logo />
				<div className={cn("flex", "flex-row", "gap-x-2")}>
					<AtSign className={cn("text-muted-foreground")} />

					<Mail className={cn("text-muted-foreground")} />
					<Send className={cn("text-muted-foreground")} />
				</div>
			</div>
			<div
				className={cn(
					"flex",
					"flex-row",
					"flex-wrap",
					"items-start",
					"justify-start",
					["gap-x-12", "gap-y-4"]
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
			<div className={cn("flex", "flex-col", "gap-y-2")}>
				<div>
					<p
						className={cn("text-muted-foreground", "font-semibold", "text-sm")}
					>
						Vitium curto vita
					</p>
					<p className={cn("text-muted-foreground", "text-xs")}>
						Suffragium reprehenderit ventito trucido supellex verbum alioqui.
					</p>
				</div>
				<div className={cn("flex", "flex-row", "items-center", "gap-x-2")}>
					<Input
						className={cn("w-64", "text-sm")}
						placeholder={"thesaurus@confero.adsidue"}
					/>
					<Button size={"sm"} variant={"outline"}>
						Tolero
					</Button>
				</div>
			</div>
		</footer>
	)
}
