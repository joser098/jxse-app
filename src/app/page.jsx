import About from "@/components/AppComponents/About";
import ContactSection from "@/components/AppComponents/ContactSection";
import Landing from "@/components/AppComponents/Landing";
import LandingHeader from "@/components/AppComponents/LandingHeader";
import Projects from "@/components/AppComponents/Projects";

export default function App() {
  return (
    <>
      <main className="w-full h-screen overflow-x-hidden flex flex-col items-center">
        <header className="w-full max-w-4xl sticky backdrop-blur z-10 top-0">
          <LandingHeader />
        </header>

        <div className="w-full max-w-4xl mb-32">
          <Landing />
        </div>

        <div className="w-full max-w-4xl mb-32">
          <About />
        </div>

        <div className="w-full max-w-4xl mb-32">
          <Projects />
        </div>

        <div id="contacto" className="w-full max-w-4xl mb-3">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
