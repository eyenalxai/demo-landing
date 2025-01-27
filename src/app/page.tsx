import { Beam } from "@/components/beam"
import { CardFlicker } from "@/components/card-flicker"
import { CardRipple } from "@/components/card-ripple"
import { CardSlider } from "@/components/card-slider"
import { CarouselDemo } from "@/components/carousel-demo"
import { Reviews } from "@/components/reviews"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
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
				className={cn("text-6xl", "font-bold", "text-center", "text-gradient")}
			>
				Ultra creo acsi deleo magni atrocitas.
			</h1>
			<p
				className={cn("text-muted-foreground", "text-center", [
					"max-w-sm",
					"lg:max-w-xl"
				])}
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
			<div className={cn("flex", "flex-col", "items-center", "gap-y-8")}>
				<div
					className={cn(
						"w-full",
						"flex",
						"flex-row",
						"justify-center",
						"items-center",
						"gap-x-4"
					)}
				>
					<RainbowButton>Carbo Odio</RainbowButton>
					<Button size={"lg"} variant={"outline"}>
						Neque Ex
					</Button>
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
					"grid",
					["grid-cols-1", "lg:grid-cols-2"],
					"gap-4",
					"max-w-screen-lg"
				)}
			>
				<div className={cn("w-full", "h-[21rem]")}>
					<CardSlider />
				</div>
				<div className={cn("w-full", "h-[21rem]", ["hidden", "lg:block"])}>
					<CardFlicker />
				</div>
				<div className={cn("lg:col-span-2", "h-[21rem]")}>
					<CardRipple />
				</div>
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
					Vivamus libero magna, non odio, eleifend!
				</h2>
			</div>
			<div className={cn(["max-w-80", "lg:max-w-screen-lg"], "w-full")}>
				<Beam />
			</div>
			<h1
				className={cn(
					"text-6xl",
					"font-bold",
					"text-center",
					"text-gradient",
					"max-w-screen-lg"
				)}
			>
				Atrox harum vicinus canonicus sui thermae argentum decens alii.
			</h1>
			<div className={cn(["w-1/2", "lg:w-5/6"], "max-w-screen-xl")}>
				<CarouselDemo />
			</div>
			<p
				className={cn("text-muted-foreground", "text-center", [
					"max-w-sm",
					"lg:max-w-xl"
				])}
			>
				Cohibeo tondeo{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					veritas aurum excepturi textilis
				</span>{" "}
				magnam. Vulariter contra admoveo tendo hic. Eos causa{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					cohaero adamo
				</span>{" "}
				velum congregatio debilito voluptatibus. Consequuntur{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					careo minus tamquam
				</span>{" "}
				peior aurum animadverto.
			</p>
			<div className={cn("max-w-3xl")}>
				<Reviews />
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
					Aiunt deripio?
				</h2>
				<p className={cn("text-muted-foreground", "text-center", "text-2xl")}>
					Vesica dicta{" "}
					<span className={cn("font-semibold", "text-gradient")}>
						tantum territo
					</span>{" "}
					arbitro aut.
				</p>
			</div>
			<div className={cn("flex", "flex-col", "items-center", "gap-y-8")}>
				<div
					className={cn(
						"w-full",
						"flex",
						"flex-row",
						"justify-center",
						"items-center",
						"gap-x-4"
					)}
				>
					<RainbowButton>Decipio Accendo</RainbowButton>
					<Button variant={"outline"}>Denuncio Alii</Button>
				</div>
			</div>
			<p
				className={cn("text-muted-foreground", "text-center", [
					"max-w-sm",
					"lg:max-w-xl"
				])}
			>
				Crapula{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					statim alias
				</span>{" "}
				ustilo. Antiquus{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					cibus patria utilis
				</span>{" "}
				charisma bellum ait suggero. Amo{" "}
				<span className={cn("font-semibold", "text-gradient")}>
					laborum tertius
				</span>{" "}
				adicio.
			</p>
		</div>
	)
}
