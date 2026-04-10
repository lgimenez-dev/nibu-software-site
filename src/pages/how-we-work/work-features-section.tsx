import { motion } from "framer-motion"
import type { WorkFeaturesSectionProps } from "./payment-methods.types"
import Lottie from "lottie-react"

export function WorkFeaturesSection({ title, description, features }: WorkFeaturesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: "preserve-3d" }}
      className="py-16 md:py-20 bg-dark-blue text-white"
    >
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15, }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <div className="m-auto w-20 h-20 shrink-0">

                    <Lottie animationData={feature.icon} loop={true} autoplay={true} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

WorkFeaturesSection.displayName = "WorkFeaturesSection"
