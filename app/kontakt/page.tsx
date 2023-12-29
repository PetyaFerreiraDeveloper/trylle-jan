import { contactCardData } from "@/app/lib/contactCardData"
import { ContactCard } from "../components/ContactCard"

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 lg:flex-row mx-auto">
      {contactCardData.map((data) => (
        <ContactCard data={data} key={data.email} />
      ))}
    </div>
  )
}

export default ContactPage
