import type { Feature, PageInfo, PaymentMethod } from "./payment-methods.types"
import animationConversation from "@/assets/animations/animation-conversation.json"
import animationControl from "@/assets/animations/animation-control.json"
import animationRocket from "@/assets/animations/animation-rocket.json"

export const ARRAY_PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "paypal",
    name: "PayPal",
    description: "Pay without sharing your card details. Ideal if you already have a PayPal account.",
  },
  {
    id: "credit-card",
    name: "Visa & Mastercard",
    description: "Pay directly with your Visa or Mastercard — fast, straightforward, and widely accepted.",
  },
  {
    id: "mercado-pago",
    name: "Mercado Pago",
    description: "Our preferred option for clients in Latin America. Pay in local currency with ease.",
  },
];

const ARRAY_FEATURES: Feature[] = [
  {
    icon: animationControl,
    title: "Secure Payments",
    description: "Your payment data is encrypted and protected with industry-standard security protocols"
  },
  {
    icon: animationConversation,
    title: "Continuous Communication",
    description: "We keep you informed at every stage of the project — regular updates, quick responses, and an open channel for your feedback"
  },
  {
    icon: animationRocket,
    title: "Partial Deliveries",
    description: "We work in iterations so you can review and validate progress before the next phase begins — no surprises at the end"
  }
]


export const PAGE_INFO: PageInfo = {
  hero: {
    title: "How We Work With You",
    description: "We build lasting partnerships through clear communication, staged deliveries, and flexible payment options — so you always know what's happening and what comes next.",
    methods: ARRAY_PAYMENT_METHODS,
  },
  workFeatures: {
    title: "Built on Trust, Delivered in Steps",
    description: "Beyond secure payments, we believe in a transparent working relationship. You'll always know where your project stands — through clear communication, staged deliveries, and payments tied to real progress.",
    features: ARRAY_FEATURES
  },
  cta: {
    title: "Ready to Get Started?",
    description: "Pick the payment method that works best for you and let's kick off your project. Have questions about billing? Reach out and we'll walk you through it.",
  },
};
