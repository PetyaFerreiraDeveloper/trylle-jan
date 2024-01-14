import { ContactCard } from "../components/ContactCard";
import { GalleryPageType } from "../lib/types";
import { getDataWP } from "../api/getDataWP";

// I wll leave the data here hardcoded - because of inconsistent styling and format on WP
export type ContactCardType = {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  cvr?: string;
  imgUrl: string;
};

const ContactPage = async () => {
  const imagesData: GalleryPageType[] = await getDataWP(
    "https://tryllejan.dk/wp-json/wp/v2/media/?per_page=100",
    "Failed to fetch images from gallery page",
  );
  const imgJan = imagesData[10]["source_url"];
  const imgEmil = imagesData[5]["source_url"];

  const contactCardData: ContactCardType[] = [
    {
      title: "Trylle Jan",
      subtitle: "Jan G. Larsen",
      phone: "40 73 01 93",
      email: "info@TrylleJan.dk",
      cvr: "37273155",
      imgUrl: imgJan,
    },
    {
      title: "Magiske Emil",
      subtitle: "Emil K. Larsen",
      phone: "30 40 30 06",
      email: "Emil.kalojan@outlook.dk",
      imgUrl: imgEmil,
    },
  ];

  return (
    <div className="page-section">
      <h2 className="text-3xl">Kontakt & Booking</h2>
      <div className={"flex flex-col lg:flex-row gap-10"}>
        {contactCardData.map((data) => (
          <ContactCard data={data} key={data.email} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
