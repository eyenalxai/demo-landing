"use client"

import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
	const months = ["Ipsum", "Dolor", "Amet", "Elit", "Maecenas", "Nunc"]
	return months.map((month) => ({
		month,
		desktop: Math.floor(Math.random() * 300) + 50,
		mobile: Math.floor(Math.random() * 200) + 50
	}))
}

const chartConfig = {
	desktop: {
		label: "Ipsum",
		color: "hsl(var(--chart-1))"
	},
	mobile: {
		label: "Dolor",
		color: "hsl(var(--chart-2))"
	}
} satisfies ChartConfig

export function AreaChartDemo() {
	const [data, setData] = useState(generateRandomData)

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle>Lorem Ipsum</CardTitle>
						<CardDescription>
							Consectetur adipiscing elit vestibulum
						</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dot" />}
						/>
						<Area
							dataKey="mobile"
							type="natural"
							fill="var(--color-mobile)"
							fillOpacity={0.4}
							stroke="var(--color-mobile)"
							stackId="a"
						/>
						<Area
							dataKey="desktop"
							type="natural"
							fill="var(--color-desktop)"
							fillOpacity={0.4}
							stroke="var(--color-desktop)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 font-medium leading-none">
							Sed do eiusmod tempor <TrendingUp className="size-4" />
						</div>
						<div className="flex items-center gap-2 leading-none text-muted-foreground">
							Ut labore et dolore magna
						</div>
					</div>
				</div>
				<Button variant="outline" onClick={() => setData(generateRandomData())}>
					Regenerate
				</Button>
			</CardFooter>
		</Card>
	)
}
