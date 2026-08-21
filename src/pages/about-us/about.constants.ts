import videoHero from "@/assets/hero/video-hero-render.webm"
import { michaelImage, sarahImage, sofiaImage, emilyImage, danielImage, oliviaImage, javierImage, adrianImage, jonathanImage, chloeImage, luisImage, amandaImage } from "@/assets/employees"
import iconAi from "@/assets/brands/ai.svg"
import iconBrain from "@/assets/brands/brain.svg"
import iconBug from "@/assets/brands/bug.svg"
import iconShield from "@/assets/brands/shield.svg"
import iconShare from "@/assets/brands/share.svg"
import iconChatbot from "@/assets/brands/chatbot.svg"
import iconAtom from "@/assets/brands/atom.svg"
import iconLeaf from "@/assets/brands/leaf.svg"
import iconCoffee from "@/assets/brands/coffee.svg"
import type { Brand, Employee, PageInfo } from "./about.types"

export const LIST_EMPLOYEES: Employee[] = [
  {
    id: 1,
    image: michaelImage,
    name: "Johnson, Michael",
    position: "CEO",
    nationality: "USA",
    email: "michael.johnson@company.com",
    description: "Strategic leader with over 15 years driving growth and innovation in technology companies. His vision combines operational efficiency with a strong customer focus."
  },
  {
    id: 2,
    image: sofiaImage,
    name: "Ramirez, Sofia",
    position: "Senior Software Engineer",
    nationality: "Mexican",
    email: "sofia.ramirez@company.com",
    description: "Software engineer specialized in scalable architectures and backend development. She stands out for her focus on quality and performance."
  },
  {
    id: 3,
    image: emilyImage,
    name: "Carter, Emily",
    position: "UI/UX Designer",
    nationality: "USA",
    email: "emily.carter@company.com",
    description: "Designer focused on creating intuitive and accessible digital experiences. Her work combines modern aesthetics with real usability."
  },
  {
    id: 4,
    image: danielImage,
    name: "Martinez, Daniel",
    position: "Full Stack Developer",
    nationality: "Cuban",
    email: "daniel.martinez@company.com",
    description: "Full stack developer expert in React, Node.js and API optimization. He provides quick and efficient solutions."
  },
  {
    id: 5,
    image: oliviaImage,
    name: "Thompson, Olivia",
    position: "Project Manager",
    nationality: "USA",
    email: "olivia.thompson@company.com",
    description: "Project manager with extensive experience coordinating multidisciplinary teams. Her focus is on clear communication and timely delivery."
  },
  {
    id: 6,
    image: javierImage,
    name: "Gonzalez, Javier",
    position: "QA Automation Engineer",
    nationality: "Argentinian",
    email: "javier.gonzalez@company.com",
    description: "Test automation specialist with solid experience in Cypress and Playwright. He ensures continuous quality in every release."
  },
  {
    id: 7,
    image: sarahImage,
    name: "Mitchell, Sarah",
    position: "Marketing Specialist",
    nationality: "USA",
    email: "sarah.mitchell@company.com",
    description: "Digital marketing professional focused on growth strategies, brand positioning and multi-channel campaigns."
  },
  {
    id: 8,
    image: adrianImage,
    name: "Lopez, Adrian",
    position: "DevOps Engineer",
    nationality: "Colombian",
    email: "adrian.lopez@company.com",
    description: "DevOps engineer expert in CI/CD, containers and infrastructure automation. He optimizes processes for greater efficiency."
  },
  {
    id: 9,
    image: jonathanImage,
    name: "Brooks, Jonathan",
    nationality: "USA",
    position: "Technical Support Specialist",
    email: "jonathan.brooks@company.com",
    description: "Technical support specialist focused on customer care and rapid incident resolution."
  },
  {
    id: 10,
    image: chloeImage,
    name: "Nguyen, Chloe",
    position: "Data Analyst",
    nationality: "Vietnamese-American",
    email: "chloe.nguyen@company.com",
    description: "Data analyst with experience in visualization, dashboards and predictive analysis. She transforms complex data into actionable decisions."
  },
  {
    id: 11,
    image: luisImage,
    name: "Hernandez, Luis",
    position: "Cybersecurity Specialist",
    nationality: "Spanish",
    email: "luis.hernandez@company.com",
    description: "Cybersecurity specialist focused on infrastructure protection, audits and incident response."
  },
  {
    id: 12,
    image: amandaImage,
    name: "Parker, Amanda",
    position: "Human Resources Manager",
    nationality: "USA",
    email: "amanda.parker@company.com",
    description: "HR manager with extensive experience in recruitment, organizational culture and talent development."
  }
]

export const BRANDS: Brand[] = [
  { id: 1, name: "Nexura", icon: iconAi },
  { id: 2, name: "Cortex Analytics", icon: iconBrain },
  { id: 3, name: "Vantric Group", icon: iconBug },
  { id: 4, name: "Aegis Systems", icon: iconShield },
  { id: 5, name: "Meridian Partners", icon: iconShare },
  { id: 6, name: "Northfield Retail", icon: iconChatbot },
  { id: 7, name: "Solstice Labs", icon: iconAtom },
  { id: 8, name: "Evergreen Holdings", icon: iconLeaf },
  { id: 9, name: "Ferro Dynamics", icon: iconCoffee }
]

export const PAGE_DATA: PageInfo = {
  hero: {
    video: videoHero,
    title: "Engineering that drives your business",
    description: "Since 1998, at Nibu Solutions we design customized solutions that modernize and automate processes. We transform your operational challenges into real competitive advantages, optimizing costs and boosting your growth.",
  },
  ourValues: {
    title: "Our Foundations",
    description: "We combine more than two decades of experience with cutting-edge technology. We don't just write code, we create systems designed to generate tangible results, focused on operational efficiency and scalability for your business"
  },
  team: {
    title: "Our Team",
    description: "Twelve specialists, one point of contact for you. Every project is staffed by the same core team from kickoff to launch - so the person who scoped your solution is the same one who ships it.",
    employees: LIST_EMPLOYEES
  },
  trustedBrands: {
    title: "Trusted By Industry Leaders",
    description: "Leading companies trust our track record to take their operations to the next level.",
    brands: BRANDS
  },
  callToAction: {
    title: "Ready for your next project?",
    description: "We put first-level development expertise at your disposal to boost your success with robust and innovative solutions."
  }
}


