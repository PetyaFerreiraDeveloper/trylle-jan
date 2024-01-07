import Image from "next/image";

export const PageContent = (props: any) => {

 /* const pageText = props.props.content.rendered

  const pageTitle = props.props.title.rendered
  */

  //   '<p>[vc_row][vc_column][vc_column_text] Om TrylleJan &amp; JuleJan Hvem er TrylleJan &amp; JuleJan? Jeg hedder Jan og er 45 år. Jeg har siden min fars kollega Max tryllede for mig som 6 årig elsket trylleri og tryllet igennem hele mit liv og været fascineret af tryl. Da jeg selv blev far, oplevede jeg en lyst til at trylle for mine børn og til deres mærkedage, så som fødselsdage og skolebegivenheder. Jeg har underholdt børn, voksne og barnlige sjæle med mine tryllekunster, mentalisme og ballonhunde. I 2019 meldte JuleJan sin ankomst og jeg har optrådt som julemand, med tilhørende nisse (Min søn Emil på [&hellip;]</p>\n'

  return (
    <>
      <section
        className="relative flex w-full min-[1366px]:h-dvh items-start justify-center overflow-hidden flex-col lg:flex-row pt-[88px] md:pt-0 gap-6 px-0">
        <Image
          src={ '/home-image.jpg' }
          alt={ 'Hero image' }
          width={ 0 }
          height={ 0 }
          sizes="100vw"
          style={ {width: '100%', height: 'auto'} }
        />
        <div
          className="absolute z-10 bottom-0 w-full h-40 flex bg-gradient-to-t from-white to-white/0">
        </div>
      </section>
      <div className="flex flex-col gap-4 w-full lg:hidden mx-auto px-5 md:px-10 lg:px-20 xl:px-36 py-10 lg:py-0">
        <h1 className="text-3xl">Om TrylleJan & JuleJan</h1>
        <h3>Hvem er TrylleJan & JuleJan?</h3>
        <p>
          Jeg hedder Jan og er 45 år. Jeg har siden min fars kollega Max
          tryllede for mig som 6 årig elsket trylleri og tryllet igennem hele
          mit liv og været fascineret af tryl. Da jeg selv blev far, oplevede
          jeg en lyst til at trylle for mine børn og til deres mærkedage, så som
          fødselsdage og skolebegivenheder. Jeg har underholdt børn, voksne og
          barnlige sjæle med mine tryllekunster, mentalisme og ballonhunde.
        </p>
        <p>
          I 2019 meldte JuleJan sin ankomst og jeg har optrådt som julemand, med
          tilhørende nisse (Min søn Emil på 12 år) hos boligforeninger,
          virksomheder, daginstitutioner & fagforeninger, hvor jeg enten
          kombinerer med 2 shows, først som Julemand og derefter tryllekunstner,
          eller som tryllende Julemand, selvom Julemanden normalt ikke kan
          trylle 😉
        </p>
        <p>
          Idag, holder jeg især af at trylle for børn, unge og voksne til for
          eksempel børnefødselsdage, konfirmationer, bryllupper,
          firmaarrangementer, klubmøder og lign. Så kontakt mig for et godt
          tilbud til at gøre netop dit arrangement helt fortryllende!
        </p>
        <p>
          Tøv ikke med at tjekke min Facebook side ud, hvor der er en del mere
          liv og opdateringer 🙂
        </p>
      </div>
    </>
  )
}
