import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">We'd love to help</h4>
          <p className="text-neutral mt-8">
            Let's build something great together. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-neutral text-lg font-bold underline decoration-accent underline-offset-8">
            Contact Information
          </p>
          <a
            href="mailto:danu.mahesa1933@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-3 font-medium transition-all duration-300">
            <div className="bg-primary flex size-10 items-center justify-center rounded-full shadow-lg">
              <MsgIcon className="size-5" />
            </div>
            danu.mahesa1933@gmail.com
          </a>
          <a
            href="tel:087722270545"
            className="text-neutral hover:text-accent flex items-center gap-3 font-medium transition-all duration-300">
            <div className="bg-primary flex size-10 items-center justify-center rounded-full shadow-lg">
              <PhoneIcon className="size-5" />
            </div>
            087722270545
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
