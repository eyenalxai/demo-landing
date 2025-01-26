"use client"

import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { Pie, PieChart } from "recharts"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"

const generateRandomData = () => {
	const items = [
		{ name: "Lorem", color: "hsl(var(--chart-1))" },
		{ name: "Ipsum", color: "hsl(var(--chart-2))" },
		{ name: "Dolor", color: "hsl(var(--chart-3))" },
		{ name: "Amet", color: "hsl(var(--chart-4))" },
		{ name: "Elit", color: "hsl(var(--chart-5))" }
	]
	return items.map(({ name, color }) => ({
		browser: name,
		visitors: Math.floor(Math.random() * 300) + 100,
		fill: color
	}))
}

const chartConfig = {
	visitors: {
		label: "Maecenas"
	},
	Lorem: {
		label: "Lorem",
		color: "hsl(var(--chart-1))"
	},
	Ipsum: {
		label: "Ipsum",
		color: "hsl(var(--chart-2))"
	},
	Dolor: {
		label: "Dolor",
		color: "hsl(var(--chart-3))"
	},
	Amet: {
		label: "Amet",
		color: "hsl(var(--chart-4))"
	},
	Elit: {
		label: "Elit",
		color: "hsl(var(--chart-5))"
	}
} satisfies ChartConfig

export function PieChartDemo() {
	const [data, setData] = useState(generateRandomData)

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Consectetur Adipiscing</CardTitle>
				<CardDescription>Duis aute irure dolor</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
				>
					<PieChart>
						<ChartTooltip content={<ChartTooltipContent hideLabel />} />
						<Pie data={data} dataKey="visitors" label nameKey="browser" />
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex items-center justify-between gap-2 text-sm">
				<div className="grid gap-2">
					<div className="flex items-center gap-2 font-medium leading-none">
						Tempor incididunt ut <TrendingUp className="size-4" />
					</div>
					<div className="leading-none text-muted-foreground">
						Labore et dolore magna aliqua
					</div>
				</div>
				<Button variant="outline" onClick={() => setData(generateRandomData())}>
					Regenerate
				</Button>
			</CardFooter>
		</Card>
	)
}
