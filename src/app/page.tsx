import { CardSlider } from "@/components/card-slider"
import { Button } from "@/components/ui/button"
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
			<div className={cn("w-full", "grid", "grid-cols-12", "max-w-screen-lg")}>
				<div className={cn(["col-span-12", "md:col-span-7"], "w-full")}>
					<CardSlider />
				</div>
			</div>
		</div>
	)
}
