export const PageContent = (props: any) => {

  const pageText = props.props.content.rendered
  console.log(pageText)

  const pageTitle = props.props.title.rendered

  //   '<p>[vc_row][vc_column][vc_column_text] Om TrylleJan &amp; JuleJan Hvem er TrylleJan &amp; JuleJan? Jeg hedder Jan og er 45 år. Jeg har siden min fars kollega Max tryllede for mig som 6 årig elsket trylleri og tryllet igennem hele mit liv og været fascineret af tryl. Da jeg selv blev far, oplevede jeg en lyst til at trylle for mine børn og til deres mærkedage, så som fødselsdage og skolebegivenheder. Jeg har underholdt børn, voksne og barnlige sjæle med mine tryllekunster, mentalisme og ballonhunde. I 2019 meldte JuleJan sin ankomst og jeg har optrådt som julemand, med tilhørende nisse (Min søn Emil på [&hellip;]</p>\n'

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <div>
        <h1 className="text-3xl">Om TrylleJan & JuleJan</h1>
        <h3>Hvem er TrylleJan & JuleJan?</h3>
      </div>
      <section className="flex flex-col gap-4">
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
      </section>
    </div>
  )
}
