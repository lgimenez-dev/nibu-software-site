import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Footer } from "@/components/layout"
import { FloatingWhatsappButton, ScrollToTop } from "@/components/shared"
import { HomePage, HowWeWorkPage, SupportPage, AboutUsPage, ContactPage, DownloadPage } from "@/pages"

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