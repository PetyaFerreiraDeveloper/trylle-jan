import { contactCardData } from "@/app/lib/contactCardData"
import { ContactCard } from "../components/ContactCard"

const ContactPage = () => {
  return (
    <div className="page-section">
      <h2 className="text-3xl">Kontakt & Booking</h2>
      <div className={"flex gap-10"}>
        { contactCardData.map((data) => (
          <ContactCard data={ data } key={ data.email }/>
        )) }
      </div>
    </div>
  )
}

export default ContactPage
