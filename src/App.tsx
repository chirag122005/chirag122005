import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Projects } from "@/pages/Projects";
import { Contact } from "@/pages/Contact";
import { Certifications } from "@/pages/Certifications";

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-gray-100">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
