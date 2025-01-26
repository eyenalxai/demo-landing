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
				<div className={cn("w-fit", "break-inside-avoid")}>
					<Card>
						<CardHeader>
							<CardTitle className={cn("text-3xl")}>
								{capitalize(`${faker.lorem.words(5)}`)}
							</CardTitle>
							<CardDescription>
								{capitalize(`${faker.lorem.words(20)}.`)}
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
				<div className={cn("w-fit", "break-inside-avoid")}>
					<CardSlider />
				</div>
				<div className={cn("w-fit", "break-inside-avoid")}>
					<Card>
						<CardHeader>
							<CardTitle className={cn("text-3xl")}>
								{capitalize(`${faker.lorem.words(5)}`)}
							</CardTitle>
							<CardDescription>
								{capitalize(`${faker.lorem.words(100)}.`)}
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
				<div className={cn("w-fit", "break-inside-avoid")}>
					<Card>
						<CardHeader>
							<CardTitle className={cn("text-3xl")}>
								{capitalize(`${faker.lorem.words(5)}`)}
							</CardTitle>
							<CardDescription>
								{capitalize(`${faker.lorem.words(20)}.`)}
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
			<CarouselDemo />
		</div>
	)
}
