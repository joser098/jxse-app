import About from "@/components/AppComponents/About";
import ContactSection from "@/components/AppComponents/ContactSection";
import Landing from "@/components/AppComponents/Landing";
import LandingHeader from "@/components/AppComponents/LandingHeader";
import Projects from "@/components/AppComponents/Projects";

export default function App() {
  return (
    <>
      <LandingHeader />

      <main className="snap-y snap-mandatory relative w-full h-[calc(100vh-90px)] overflow-y-auto scroll-smooth overflow-x-hidden p-0">
        <div className="snap-center">
          <Landing />
        </div>

        <div className="snap-center">
          <About />
        </div>

        <div className="snap-center">
          <Projects />
        </div>

        <div className="snap-center">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
