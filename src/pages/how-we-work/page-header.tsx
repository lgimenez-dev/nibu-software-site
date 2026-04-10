import type { PageHeaderProps } from "./payment-methods.types"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "./payment-methods.utils"
import { PaymentMethodCard } from "./payment-method-card"

export function PageHeader({ title, description, methods }: PageHeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: "preserve-3d" }}
      className="py-12 sm:py-16 md:py-26 bg-gradient-to-r from-slate-50 to-blue-50"
    >
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
            {title}
          </h4>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="pt-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {methods?.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <PaymentMethodCard method={item} index={0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

PageHeader.displayName = "PageHeader"
