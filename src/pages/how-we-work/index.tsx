import { PageHeader } from "./page-header";
import { WorkFeaturesSection } from "./work-features-section";
import { CTASection } from "@/components/shared";
import { PAGE_INFO } from "./payment-methods.constants";

export function HowWeWorkPage() {
  return (
    <article>
      <PageHeader
        title={PAGE_INFO.hero.title}
        description={PAGE_INFO.hero.description}
        methods={PAGE_INFO.hero.methods}
      />
      <WorkFeaturesSection
        title={PAGE_INFO.workFeatures.title}
        description={PAGE_INFO.workFeatures.description}
        features={PAGE_INFO.workFeatures.features}
      />
      <CTASection
        title={PAGE_INFO.cta.title}
        description={PAGE_INFO.cta.description}
      />
    </article>
  );
}
