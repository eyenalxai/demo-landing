import { cn } from "@/lib/utils"
import { faker } from "@faker-js/faker"

export default function Page() {
	return <div className={cn("capitalize")}>{faker.lorem.word()}</div>
}
