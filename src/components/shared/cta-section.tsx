import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export interface CTASectionProps {
  title: string
  description: string
}

export function CTASection({ title, description }: CTASectionProps) {
  const navigate = useNavigate()

  return (
    <motion.section
      initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: "preserve-3d" }}
      className="py-16 md:py-20 bg-gradient-to-r from-slate-50 to-blue-50 border-t border-gray-200"
    >
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          <Button
            size="lg"
            className="cursor-pointer px-8 py-6 text-lg transition-all hover:scale-105 gap-2"
            onClick={() => navigate("/contacto")}
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

CTASection.displayName = "CTASection"
