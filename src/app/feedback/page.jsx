import LandingHeader from "@/components/AppComponents/LandingHeader";
import FeedbackForm from "@/components/AppComponents/FeedbackForm";

export default function Feedback() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <LandingHeader />
      </div>

      <div className="w-full max-w-4xl p-8 md:p-0">
        <h3 className="w-full font-thin text-lg mb-3 text-left">
          - Valiosa tu opinion para mejorar!🫶
        </h3>
        <p className="text-xs md:text-sm my-5">
          Este formulario ha sido creado porque tu opinión es de gran
          importancia para mí en mi constante búsqueda de mejorar lo que hago y
          cómo lo hago.
        </p>
      </div>

      <div className="w-full max-w-4xl px-8 mb-5 md:px-0">
        <FeedbackForm />
      </div>
    </section>
  );
}
