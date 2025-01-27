import { CardFlicker } from "@/components/card-flicker"
import { CardRipple } from "@/components/card-ripple"
import { CardSlider } from "@/components/card-slider"
import { CarouselDemo } from "@/components/carousel-demo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Page() {
	return (
		<div
			className={cn(
				"flex",
				"flex-col",
				"gap-y-12",
				"justify-center",
				"items-center"
			)}
		>
			<h1
				className={cn(
					"text-6xl",
					"font-bold",
					"text-center",
					"max-w-[30rem]",
					"text-gradient"
				)}
			>
				Ultra creo acsi deleo magni atrocitas.
			</h1>
			<p
				className={cn("max-w-[30rem]", "text-muted-foreground", "text-center")}
			>
				Amor capillus harum capto est{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					universe unde strues
				</span>{" "}
				tricesimus cuppedia adamo{" "}
				<span className={cn("font-semibold", "text-gradient")}>
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
			<div
				className={cn(
					"flex",
					"flex-row",
					"flex-wrap",
					"justify-center",
					"items-end",
					"gap-4"
				)}
			>
				<h2
					className={cn(
						"text-4xl",
						"font-bold",
						"text-center",
						"text-gradient"
					)}
				>
					Id cohibeo vaco?
				</h2>
				<p className={cn("text-muted-foreground", "text-center", "text-2xl")}>
					Quo conicio{" "}
					<span className={cn("font-semibold", "text-gradient")}>
						via absconditus
					</span>{" "}
					abundans.
				</p>
			</div>
			<div
				className={cn(
					"relative",
					"gap-4",
					"grid",
					"grid-cols-3",
					"grid-flow-dense"
				)}
			>
				<CardSlider />
				<div className={cn("px-[3.25rem]", "col-span-2")}>
					<CarouselDemo />
				</div>
				<div
					className={cn("absolute", "top-[22.5rem]", "w-80", "h-[32.25rem]")}
				>
					<CardFlicker />
				</div>
				<div
					className={cn(
						"absolute",
						"top-[38rem]",
						"left-[21.25rem]",
						"w-[36.5rem]",
						"h-[16.75rem]"
					)}
				>
					<CardRipple />
				</div>
			</div>
		</div>
	)
}
