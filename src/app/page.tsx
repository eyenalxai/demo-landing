import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Page() {
	return (
		<div className={cn("flex", "flex-col", "gap-y-12")}>
			<h1
				className={cn(
					"text-6xl",
					"font-bold",
					"text-center",
					"max-w-[30rem]",
					"bg-clip-text",
					"bg-gradient-to-tr",
					"from-primary",
					"to-primary/50",
					"text-transparent"
				)}
			>
				Ultra creo acsi deleo magni atrocitas.
			</h1>
			<p
				className={cn("max-w-[30rem]", "text-muted-foreground", "text-center")}
			>
				Amor capillus harum capto est{" "}
				<span
					className={cn(
						"font-semibold",
						"bg-clip-text",
						"bg-gradient-to-tr",
						"from-primary",
						"to-primary/80",
						"text-transparent"
					)}
				>
					universe unde strues
				</span>{" "}
				tricesimus cuppedia adamo{" "}
				<span
					className={cn(
						"font-semibold",
						"bg-clip-text",
						"bg-gradient-to-tr",
						"from-primary",
						"to-primary/80",
						"text-transparent"
					)}
				>
					capto circumvenio creo
				</span>{" "}
				adulatio demergo supplanto nobis pauci, ligula arcu luctus felis.
			</p>
			<div className={cn("flex", "flex-col", "items-center", "gap-y-2")}>
				<div
					className={cn(
						"w-full",
						"flex",
						"flex-row",
						"justify-center",
						"gap-x-2"
					)}
				>
					<Button>Carbo Odio</Button>
					<Button variant={"outline"}>Neque Ex</Button>
				</div>
				<p className={cn("text-muted-foreground")}>
					Dolore consequatur adsidue cornu.
				</p>
			</div>
		</div>
	)
}
