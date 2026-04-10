export interface Employee {
  id: number
  image?: string
  name?: string
  position?: string
  nationality?: string
  email?: string
  description?: string
}

export interface Brand {
  id: number
  icon?: any
  name?: string
}

export interface PageInfo {
  hero: HeroSectionProps
  ourValues: ValuesSectionProps
  team: TeamSectionProps
  trustedBrands: TrustedBrandsSectionProps
  callToAction: CallToActionSectionProps
}

export interface HeroSectionProps {
  title: string
  description: string
  video: string
}

export interface ValuesSectionProps {
  title: string
  description: string
}

export interface TeamSectionProps {
  title: string
  description: string
  employees: Employee[]
}

export interface EmployeeCardProps {
  employee: Employee
  index: number
}

export interface TrustedBrandsSectionProps {
  title: string
  description: string
  brands: Brand[]
}

export interface CallToActionSectionProps {
  title: string
  description: string
}