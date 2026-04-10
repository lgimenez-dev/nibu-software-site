export interface PageInfo {
  hero: PageHeaderProps;
  workFeatures: WorkFeaturesSectionProps;
  cta: { title: string; description: string };
}

export interface PageHeaderProps {
  title: string;
  description: string;
  methods: PaymentMethod[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

export interface WorkFeaturesSectionProps {
  title: string;
  description: string;
  features: Feature[];
}

export interface Feature {
  icon: object;
  title: string;
  description: string;
}


export interface PaymentMethodCardProps {
  method: PaymentMethod;
  index: number;
}

