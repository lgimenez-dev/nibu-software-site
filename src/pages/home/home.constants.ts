
import type { Product, Stat, Testimonial, FeatureCardProps, PageInfo } from "./home.types"

import iconAtlasDB from "@/assets/software-images/AtlasDB.svg"
import iconNimbusFlow from "@/assets/software-images/NimbusFlow.svg"
import iconPulseSync from "@/assets/software-images/PulseSync.svg"
import iconSentinelCore from "@/assets/software-images/SentinelCore.svg"

import animationPuzzle from "@/assets/animations/animation-puzzle.json"
import animationDB from "@/assets/animations/animation-db.json"
import animationCheck from "@/assets/animations/animation-check.json"
import animationSatellite from "@/assets/animations/animation-satellite.json"
import videoHero from "@/assets/hero/video-hero.webm";
import { Headset } from "lucide-react"


export const PAGE_DATA: PageInfo = {
  hero: {
    video: videoHero,
    title: "Software That Drives Your Business",
    description: "Innovative and scalable technology solutions designed to optimize your processes and accelerate your company's growth.",
  },
  products: {
    title: "Solutions Tailored to You",
    description: "From comprehensive management systems to custom developments, we adapt our technology to your company's workflow."
  },
  features: {
    title: "Why Choose us?",
    description: "Our platform combines an intuitive interface with the technical power needed to manage highly complex businesses."
  },
  testimonials: {
    title: "What Our Clients Say",
    description: "Thousands of companies trust our solutions. Discover the experiences of those who have already transformed their business."
  },
  callToAction: {
    title: "Ready to Take the Next Step?",
    description: "Let's talk about your project. We put our expertise at your service to build the tool your company needs today."
  }
}

export const LIST_PRODUCTS: readonly Product[] = [
  {
    icon: iconNimbusFlow,
    title: "NimbusFlow",
    description: "Cloud-Native Workflow Automation.",
    features: [
      "Real-time orchestration of distributed workflows",
      "Event-driven architecture with built-in retry and compensation logic",
      "Visual pipeline designer for non-technical users",
      "Seamless integration with AWS, Azure, and GCP services",
      "Enterprise-grade monitoring and audit trails"
    ],
  },
  {
    icon: iconSentinelCore,
    title: "SentinelCore",
    description: "Security & Compliance Platform.",
    features: [
      "Continuous vulnerability scanning across microservices and APIs",
      "Automated compliance checks for SOC 2, ISO 27001, and GDPR",
      "Role-based access control with adaptive authentication",
      "Threat detection powered by behavioral analytics",
      "Centralized incident response dashboard"
    ],
  },
  {
    icon: iconAtlasDB,
    title: "AtlasDB Engine",
    description: "High-Performance Data Layer.",
    features: [
      "Distributed SQL engine optimized for low-latency queries",
      "Automatic sharding and replication across regions",
      "Schema evolution tools for safe migrations",
      "Built-in caching layer for high-throughput workloads",
      "Observability suite with query profiling and anomaly detection"
    ],
  },
  {
    icon: iconPulseSync,
    title: "PulseSync",
    description: "Real-Time Collaboration Suite.",
    features: [
      "Live document editing with conflict-free synchronization",
      "Team messaging with contextual threads and AI-powered summaries",
      "Secure file sharing with version history",
      "Integration with Slack, Teams, and GitHub",
      "Offline-first mobile and desktop apps"
    ],
  },
] as const

export const LIST_FEATURES: readonly FeatureCardProps[] = [
  {
    letter: "S",
    title: "Supportive",
    description: "We are proactive throughout the entire project — anticipating challenges before they arise and keeping things moving forward.",
    animation: animationCheck,
  },
  {
    letter: "A",
    title: "Adaptable",
    description: "Our solutions adjust to the specific needs of each business, regardless of their size or complexity.",
    animation: animationPuzzle,
  },
  {
    letter: "I",
    title: "Innovative",
    description: "We leverage cutting-edge technology to build modern, scalable solutions that give your business a competitive edge.",
    animation: animationSatellite,
  },
  {
    letter: "C",
    title: "Cybersecure",
    description: "Your data is protected at every layer. Our solutions are built with enterprise-grade security standards to keep your business safe and compliant.",
    animation: animationDB,
  },
] as const

export const LIST_STATS: readonly Stat[] = [
  { value: "+1200", label: "Active Businesses" },
  { value: "100%", label: "National Support" },
  { value: undefined, label: "Technical Assistance", icon: Headset },
  { value: "+20", label: "Years of Experience" },
] as const

export const LIST_TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "James Carter",
    role: "CTO",
    company: "Apex Logistics Group",
    comment: "NimbusFlow eliminated the bottlenecks in our supply chain operations. Automated workflows that used to require manual oversight now run end-to-end without intervention. A game changer for our ops team.",
    rating: 5,
  },
  {
    name: "Sandra Müller",
    role: "Engineer",
    company: "FinCore AG",
    comment: "We integrated AtlasDB Engine into our banking platform and the performance gains were immediate. Query times dropped dramatically and we finally have the observability we needed to scale confidently.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "VP of Product",
    company: "TechNova Solutions",
    comment: "SentinelCore gave us full visibility into our compliance posture across every microservice. The automated SOC 2 checks alone saved our security team weeks of manual auditing each quarter.",
    rating: 4,
  },
] as const
