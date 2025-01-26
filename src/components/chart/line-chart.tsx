"use client"

import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { CartesianGrid, LabelList, Line, LineChart } from "recharts"

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
	const browsers = [
		{ name: "Lorem", color: "var(--color-chrome)" },
		{ name: "Ipsum", color: "var(--color-safari)" },
		{ name: "Dolor", color: "var(--color-firefox)" },
		{ name: "Amet", color: "var(--color-edge)" },
		{ name: "Elit", color: "var(--color-other)" }
	]
	return browsers.map(({ name, color }) => ({
		browser: name,
		visitors: Math.floor(Math.random() * 300) + 100,
		fill: color
	}))
}

const chartConfig = {
	visitors: {
		label: "Maecenas",
		color: "hsl(var(--chart-2))"
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

export function LineChartDemo() {
	const [data, setData] = useState(generateRandomData)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Vestibulum Consectetur</CardTitle>
				<CardDescription>Sed ut perspiciatis unde omnis</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{
							top: 24,
							left: 24,
							right: 24
						}}
					>
						<CartesianGrid vertical={false} />
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									indicator="line"
									nameKey="visitors"
									hideLabel
								/>
							}
						/>
						<Line
							dataKey="visitors"
							type="natural"
							stroke="var(--color-visitors)"
							strokeWidth={2}
							dot={{
								fill: "var(--color-visitors)"
							}}
							activeDot={{
								r: 6
							}}
						>
							<LabelList
								position="top"
								offset={12}
								className="fill-foreground"
								fontSize={12}
								dataKey="browser"
								formatter={(value: keyof typeof chartConfig) =>
									chartConfig[value]?.label
								}
							/>
						</Line>
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex items-center justify-between gap-2 text-sm">
				<div className="grid gap-2">
					<div className="flex gap-2 font-medium leading-none">
						Nunc sed augue lacus <TrendingUp className="size-4" />
					</div>
					<div className="leading-none text-muted-foreground">
						Viverra maecenas accumsan lacus
					</div>
				</div>
				<Button variant="outline" onClick={() => setData(generateRandomData())}>
					Regenerate
				</Button>
			</CardFooter>
		</Card>
	)
}
