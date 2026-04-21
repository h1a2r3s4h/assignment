import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FeaturesBar from "@/components/compare/features-bar";
export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      {/* 👇 THIS IS YOUR "Get In Touch" SECTION */}
      <div className="text-center max-w-[600px] mx-auto mt-16 px-4">
        <h2 className="text-[32px] font-semibold">
          Get In Touch With Us
        </h2>

        <p className="text-gray-400 mt-4 leading-7 text-[15px]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* 👇 MAIN CONTENT (INFO + FORM) */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        <ContactInfo />
        <ContactForm />
      </section>
         <FeaturesBar />
    </div>
  );
}