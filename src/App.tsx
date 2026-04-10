import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsappButton } from "@/components/shared"
import { HomePage } from "@/pages/home"
import { HowWeWorkPage } from "@/pages/how-we-work"
import { SupportPage } from "./pages/support"
import { AboutUsPage } from "./pages/about-us"
import { ContactPage } from "./pages/contact"
import { DownloadPage } from "./pages/download"
import ScrollToTop from "./components/shared/scroll-on-top"

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsappButton />
      </div>
    </BrowserRouter>
  )
}

export default App