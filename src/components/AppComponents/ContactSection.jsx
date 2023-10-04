import ContactForm from "./ContactForm";

const ContactSection = () => {
    return(
        <section className="h-[calc(100vh-90px)] px-8">
        <h3 className="font-thin text-lg mb-3">- Hablemos 😁</h3>

        <ContactForm />
      </section>
    )
};

export default ContactSection;