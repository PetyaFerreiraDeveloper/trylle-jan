export type ContactCardType = {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  cvr?: string;
  imgUrl: string;
};

export const contactCardData: ContactCardType[] = [
  {
    title: "Trylle Jan",
    subtitle: "Jan G. Larsen",
    phone: "40 73 01 93",
    email: "info@TrylleJan.dk",
    cvr: "37273155",
    imgUrl: "/emil.jpeg",
  },
  {
    title: "Magiske Emil",
    subtitle: "Emil K. Larsen",
    phone: "30 40 30 06",
    email: "Emil.kalojan@outlook.dk",
    imgUrl: "/emil.jpeg",
  },
];
