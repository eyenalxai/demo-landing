import { AreaChartDemo } from "@/components/chart/area-chart"
import { CardSlider } from "@/components/card-slider"
import { CarouselDemo } from "@/components/carousel-demo"
import { LineChartDemo } from "@/components/chart/line-chart"
import { PieChartDemo } from "@/components/chart/pie-chart"
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
					"space-y-4",
					"mt-12"
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
			<div className={cn("w-full", "mt-12", "flex", "justify-center")}>
				<CarouselDemo />
			</div>
			<div
				className={cn("flex", "flex-col", "gap-y-4", "mt-12", "items-center")}
			>
				<Card className={cn("max-w-2xl")}>
					<CardHeader>
						<CardTitle className={cn("text-3xl")}>
							Vito statua tempore
						</CardTitle>
						<CardDescription>
							Vitae auctor dolores atque angelus nobis quibusdam abscido dedico
							solus abduco adulatio neque artificiose spero teneo vorago urbs
							annus sumo.
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className={cn("max-w-2xl")}>
					<CardHeader>
						<CardTitle className={cn("text-3xl")}>
							Maxime depono casso illum
						</CardTitle>
						<CardDescription>
							Calamitas non talus despecto sequi virtus cogo usque asper amet
							qui deporto cognatus quaerat tricesimus templum sursum ager
							accommodo a carmen repudiandae casus trado defessus arbor deduco
							claro tenax cupressus.
						</CardDescription>
					</CardHeader>
				</Card>
				<Card className={cn("max-w-2xl")}>
					<CardHeader>
						<CardTitle className={cn("text-3xl")}>
							Aro est suadeo benevolentia volo vigilo
						</CardTitle>
						<CardDescription>
							Comitatus esse avaritia veritatis corporis laborum terminatio
							audax defungo textus cribro decet volutabrum comes damnatio aranea
							curso convoco dignissimos deripio cotidie canis sol aperio quaerat
							copiose amicitia impedit aspernatur unus expedita cui celo demum
							cuppedia quasi sordeo cupiditate brevis vinco.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
			<div className={cn("flex", "flex-row", "gap-x-4", "mt-12")}>
				<PieChartDemo />
				<AreaChartDemo />
				<LineChartDemo />
			</div>
		</div>
	)
}
