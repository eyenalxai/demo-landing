"use client"

import { BorderBeam } from "@/components/ui/border-beam"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { Contrast, Hexagon, Podcast } from "lucide-react"
import { useState } from "react"

export const CardSlider = () => {
	const [valueOne, setValueOne] = useState(20_000)
	const [valueTwo, setValueTwo] = useState(5)

	return (
		<Card className={cn("w-full", "h-full", "relative", "overflow-hidden")}>
			<BorderBeam size={250} duration={12} delay={9} />
			<CardHeader>
				<CardTitle className={cn("text-2xl", "font-bold", "text-gradient")}>
					Quibusdam temporibus
				</CardTitle>
				<CardDescription>
					Timidus cresco civis aegrotatio qui urbs conspergo confido vinculum.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<div className={cn("flex", "items-center", "justify-between")}>
						<label
							htmlFor="investment-amount"
							className={cn(
								"text-sm",
								"font-medium",
								"flex",
								"items-center",
								"gap-2"
							)}
						>
							<Podcast className={cn("w-4", "h-4")} />
							Valeo aro
						</label>
						<span className="font-bold">{valueOne.toLocaleString()}</span>
					</div>
					<Slider
						id="investment-amount"
						min={1_000}
						max={50_000}
						step={1}
						value={[valueOne]}
						onValueChange={([value]) => setValueOne(value)}
						className="[&_[role=slider]]:shadow-md"
					/>
				</div>
				<div className="space-y-2">
					<div className={cn("flex", "items-center", "justify-between")}>
						<label
							htmlFor="investment-years"
							className={cn(
								"text-sm",
								"font-medium",
								"flex",
								"items-center",
								"gap-2"
							)}
						>
							<Hexagon className={cn("w-4", "h-4")} />
							Accommodo id
						</label>
						<span className="font-bold">{valueTwo} adulescens</span>
					</div>
					<Slider
						id="investment-years"
						min={5}
						max={100}
						step={5}
						value={[valueTwo]}
						onValueChange={([value]) => setValueTwo(value)}
						className="[&_[role=slider]]:shadow-md"
					/>
				</div>
			</CardContent>
			<Separator className="my-4" />
			<CardFooter className={cn("flex", "justify-between", "items-center")}>
				<div
					className={cn(
						"flex",
						"items-center",
						"gap-2",
						"text-sm",
						"font-medium"
					)}
				>
					<Contrast className={cn("w-4", "h-4")} />
					Defluo spargo:
				</div>
				<div className={cn("text-2xl", "font-bold", "text-gradient")}>
					{(valueOne * valueTwo).toLocaleString()}
				</div>
			</CardFooter>
		</Card>
	)
}
