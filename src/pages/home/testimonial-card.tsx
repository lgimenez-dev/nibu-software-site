import { Card, CardContent } from "@/components/ui"
import { StarIcon } from "lucide-react"
import type { TestimonialCardProps } from "./home.types"

export function TestimonialCard({ name, role, company, comment, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
      <CardContent className="h-full flex flex-col justify-between">
        <div>
          <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <StarIcon key={i} className="size-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed italic font-display select-none mb-6">
            "{comment}"
          </p>
        </div>
        <div className="border-t pt-4 flex justify-end select-none">
          <div className="text-right">
            <p className="font-semibold text-foreground">{name} ({role})</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
