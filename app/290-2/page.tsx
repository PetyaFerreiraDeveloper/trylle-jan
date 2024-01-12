import { Trade_Winds } from "next/font/google";
const tradeWinds = Trade_Winds({ weight: "400", subsets: ["latin"] });

const MagicEmilPage = () => {
  return (
    <section className={"page-section"}>
      <h1 className={`${tradeWinds.className} mb-4 text-3xl tracking-widest`}>
        MAGISKE EMIL
      </h1>
      <p>
        Jeg Emil og jeg er 12 år. Da jeg var seks år begyndte jeg at finde
        interesse for tryl og fik mit første trick og siden da er jeg blevet
        dygtiger og dygtiger. Som 9 årig begyndt jeg at lave shows med min far
        og syndes at det var fedt at komme ud at trylle. Nu har jeg selv lyst
        til at komme ud at trylle for børn og voksende. Jeg vil elske at komme
        ud til jeres fødselsdag, konfirmation og lign. Så hvis i en dag for lyst
        til en trylle kunster så hav meg i tankerne jeg vil levere det mes
        magiske show i nogen sinde kommer til at se.
      </p>
    </section>
  );
};

export default MagicEmilPage;
