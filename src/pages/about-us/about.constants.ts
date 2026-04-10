import videoHero from "@/assets/hero/video-hero-render.webm"
import { michaelImage, sarahImage, sofiaImage, emilyImage, danielImage, oliviaImage, javierImage, adrianImage, jonathanImage, chloeImage, luisImage, amandaImage } from "@/assets/employees"
import { IconChatgpt, IconGoogle, IconMcdonald, IconIntel,  IconFirefox, IconVisa, IconGithub } from '@/components/shared/icons'
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
  { id: 1, name: "Google", icon: IconGoogle },
  { id: 2, name: "ChatGPT", icon: IconChatgpt },
  { id: 3, name: "McDonald's", icon: IconMcdonald },
  { id: 4, name: "Intel", icon: IconIntel },
  { id: 5, name: "Visa", icon: IconVisa },
  { id: 7, name: "Firefox", icon: IconFirefox },
  { id: 8, name: "Github", icon: IconGithub }
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
    description: "We are specialists passionate about technology and solving complex problems. We stand out for our versatility and for providing comprehensive support, ensuring that every line of code adds value to your vision.",
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


