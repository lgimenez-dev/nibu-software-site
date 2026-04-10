import { Calendar, Headphones, MessageCircle } from "lucide-react";
import type { WhatsappOption } from "./floating-whatsapp-button.types";
import { CONTACT_INFO } from "./contact.constants";

export const DEFAULT_WHATSAPP_OPTIONS: WhatsappOption[] = [
  {
    label: "Request Information",
    href: "/contact",
    icon: <Calendar className="size-5 text-primary-blue" />, 
  },
  {
    label: "Technical Support",
    href: `${CONTACT_INFO.whatsapp.support}?text=Hi,%20I%20need%20technical%20support`,
    icon: <Headphones className="size-5 text-primary-blue" />, 
  },
  {
    label: "General Inquiry",
    href: `${CONTACT_INFO.whatsapp.training}?text=Hi,%20I%20have%20 a%20question`,
    icon: <MessageCircle className="size-5 text-primary-blue" />, 
  },
] as const;
