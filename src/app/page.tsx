import { CardSlider } from "@/components/card-slider"
import { CarouselDemo } from "@/components/carousel-demo"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { capitalize, cn } from "@/lib/utils"
import { faker } from "@faker-js/faker"

export default function Page() {
	return (
		<div
			className={cn("w-full", "flex", "flex-col", "items-center", "gap-y-4")}
		>
			<p className={cn("text-muted-foreground")}>
				{capitalize(`${faker.lorem.words(2)}`)}
			</p>
			<h1 className={cn("text-6xl", "font-bold", "max-w-lg", "text-center")}>
				{capitalize(`${faker.lorem.words(6)}.`)}
			</h1>
			<h2
				className={cn(
					"text-xl",
					"max-w-lg",
					"text-center",
					"text-muted-foreground"
				)}
			>
				{capitalize(`${faker.lorem.words(20)}.`)}
			</h2>
			<Button>{capitalize(`${faker.lorem.words(2)}`)}</Button>
			<div
				className={cn(
					"w-full",
					"columns-1 md:columns-2",
					"max-w-screen-lg",
					"space-y-4"
				)}
			>
				<div className={cn("w-full", "break-inside-avoid")}>
					<Card className={cn("h-40")}>
						<CardHeader>
							<CardTitle className={cn("text-3xl")}>
								Vobis acquiro uterque adipisci soluta
							</CardTitle>
							<CardDescription>
								Vobis acquiro uterque adipisci soluta
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
				<div className={cn("w-full", "break-inside-avoid")}>
					<CardSlider />
				</div>
				<div className={cn("w-full", "break-inside-avoid")}>
					<Card className={cn("h-[21rem]")}>
						<CardHeader>
							<CardTitle className={cn("text-3xl")}>
								Decet varius non argumentum abeo
							</CardTitle>
							<CardDescription>
								Alo vita sodalitas ustulo crebro comedo conservo consuasor
								universe congregatio coruscus debeo accedo succedo attero qui
								tantillus repudiandae autus certe cinis abduco conscendo debeo
								adhaero vigilo carcer charisma charisma solutio temptatio
								coniecto aliqua quasi aggero commemoro thymbra patria nulla
								acquiro conspergo tam coma ascisco hic admoneo calculus
								repellendus unde copia caveo repellendus vehemens cogo una
								allatus cavus terra tabernus vorago verto aspicio voluptate
								cattus deleo vester nobis vae atrox vorago copia desparatus
								calculus amo alienus viduo speculum theatrum ubi cito
								thalassinus triduana capto carbo vero tero.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
				<div className={cn("w-full", "break-inside-avoid")}>
					<Card className={cn("h-52")}>
						<CardHeader>
							<CardTitle className={cn("text-3xl")}>
								Suggero artificiose cattus ter vigor
							</CardTitle>
							<CardDescription>
								Tantillus aveho earum ex somniculosus temperantia taceo peccatus
								defessus aeternus appositus via fuga appono alo cito corrigo
								claudeo confugo pauci.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
			<CarouselDemo />
		</div>
	)
}
