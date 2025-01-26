"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const CardSlider = () => {
	const [coarseValue, setCoarseValue] = useState(50)
	const [fineValue, setFineValue] = useState(0)

	const combinedValue = Math.max(0, coarseValue * 2 + fineValue * 0.5) * 1000

	return (
		<Card className={cn("col-span-6", "w-full")}>
			<CardHeader>
				<CardTitle className={cn("text-3xl")}>
					Vesper terra tabernus sunt
				</CardTitle>
				<CardDescription>
					<p className={cn("text-xl")}>Clarus spes magnam color tui defungo.</p>
					<p className={cn("text-sm")}>
						Pecco demulceo virga nostrum aperiam quod cruciamentum cognatus
						tutis cursim audacia pecus vicinus vitae vulpes bibo umbra denego
						commemoro ventito abstergo thesis cuppedia vallum.
					</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className={cn("flex", "flex-col", "gap-y-4")}>
					<p className={cn("text-3xl", "font-bold")}>
						{combinedValue.toFixed(0)}
					</p>
					<div className={cn("flex", "flex-row", "gap-x-4")}>
						<Slider
							defaultValue={[coarseValue]}
							onValueChange={(value) => setCoarseValue(value[0])}
							max={100}
							step={1}
						/>

						<Slider
							defaultValue={[fineValue]}
							onValueChange={(value) => setFineValue(value[0])}
							min={-10}
							max={10}
							step={0.1}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter className={cn("text-muted-foreground", "text-sm")}>
				Numquam tametsi talus cimentarius depopulo crustulum cetera fugiat
				dolorum infit.
			</CardFooter>
		</Card>
	)
}
