import LandingHeader from "@/components/AppComponents/LandingHeader";

export const metadata = {
  title: "Agenda una reunion | Jxse",
};

export default function Schedule() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <LandingHeader />
      </div>

      <div className="w-full max-w-4xl">
        <article className="p-8 md:p-0 h-[calc(100vh-86px)] flex flex-col items-center">
          <h3 className="font-thin text-lg mb-3 text-left w-full">
            - Agenda una reunion!🤝
          </h3>

          <iframe
            src="https://calendly.com/jxsejaramillo/meet"
            className="w-full h-full max-w-[700px] max-h-[700px] rounded-sm"
          >
            Cargando
          </iframe>
        </article>
      </div>
    </section>
  );
}
