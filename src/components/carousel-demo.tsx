"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"

export const CarouselDemo = () => (
	<Carousel
		plugins={[
			Autoplay({
				delay: 2000
			})
		]}
		opts={{ loop: true }}
		className="w-full"
	>
		<CarouselContent>
			{Array.from({ length: 5 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: It's a demo
				<CarouselItem key={index} className={cn("lg:basis-1/3")}>
					<div className="p-1">
						<Card>
							<CardContent className="flex aspect-square items-center justify-center p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</CardContent>
						</Card>
					</div>
				</CarouselItem>
			))}
		</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	</Carousel>
)
