import { IconTeamviewer, IconChromeBrowser, IconWinRAR, IconZoom } from "@/components/shared"
import type { PageInfo } from "./download.types"

export const PAGE_INFO: PageInfo = {
  header: {
    title: "Downloads",
    subtitle: "Download the necessary tools for remote support or other essential resources for the proper functioning of our systems. All downloads are safe and up to date.",
  },
  downloads: [
    {
      id: "chrome",
      logo: IconChromeBrowser,
      name: "Google Chrome",
      description: "Web browser recommended for accessing Nibu web applications.",
      url: "https://www.google.com/chrome/",
    },
    {
      id: "teamviewer",
      logo: IconTeamviewer,
      name: "TeamViewer",
      description: "Download and install TeamViewer to allow our technicians to provide remote support.",
      url: "https://www.teamviewer.com/en/download/windows/",
    },
    {
      id: "zoom",
      logo: IconZoom,
      name: "Zoom",
      description: "Download and install Zoom to participate in remote meetings and support sessions.",
      url: "https://zoom.us/download",
    },
    {
      id: "winrar",
      logo: IconWinRAR,
      name: "WinRAR",
      description: "Download and install WinRAR to manage compressed files related to our systems.",
      url: "https://www.win-rar.com/download.html",
    },
  ]
}
