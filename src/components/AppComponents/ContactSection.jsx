import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="h-[calc(100vh-86px)] px-8 md:px-0">
      <h3 className="font-thin text-lg mb-3 text-left w-full">- Hablemos 😁</h3>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
