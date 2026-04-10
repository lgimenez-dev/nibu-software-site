import { Button } from "@/components/ui/button"
import Lottie from "lottie-react"
import animationGearwrench from "@/assets/animations/animation-gearwrench.json"
import type { EmptyStateProps } from "./support.types"

export function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <div className="m-auto w-24 h-24 shrink-0">
        <Lottie
          animationData={animationGearwrench}
          loop={true}
          autoplay={true}
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        We can't find technicians
      </h3>
      <p className="text-gray-600 mb-6 max-w-xxl mx-auto">
        Try adjusting your search criteria or select a different location.
      </p>
      <Button onClick={onClearFilters} variant="outline">
        Clear filters
      </Button>
    </div>
  )
}

EmptyState.displayName = "EmptyState"
