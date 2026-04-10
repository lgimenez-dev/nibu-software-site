import { motion } from "framer-motion"
import type { PaymentMethodCardProps } from "./payment-methods.types"

export function PaymentMethodCard({ method, index }: PaymentMethodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1, }}
      className="group relative h-full"
    >
      <div className="h-full flex flex-col p-6 bg-white rounded-lg border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          {method.name}
        </h3>
        <p className="text-muted-foreground">
          {method.description}
        </p>
      </div>
    </motion.div>
  )
}

PaymentMethodCard.displayName = "PaymentMethodCard"
