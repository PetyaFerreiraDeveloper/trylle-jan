import Image from "next/image";
import { HtmlText } from "@/app/components/HtmlText";

export const PageContent = ({data}: any) => {
  console.log({data})

  /*const test = `<p>[vc_row][vc_column][vc_column_text]</p>\n +
    <h1 style="text-align: center;">Om TrylleJan &amp; JuleJan</h1>\n +
    <p style="text-align: center;">Hvem er TrylleJan &amp; JuleJan?</p>\n +
    <p style="text-align: center;">Jeg hedder Jan og er 45 år. Jeg har siden min fars kollega Max tryllede for mig som 6 årig elsket trylleri og tryllet igennem hele mit liv og været fascineret af tryl. Da jeg selv blev far, oplevede jeg en lyst til at trylle for mine børn og til deres mærkedage, så som fødselsdage og skolebegivenheder. Jeg har underholdt børn, voksne og barnlige sjæle med mine tryllekunster, mentalisme og ballonhunde.</p>\n +
    <p style="text-align: center;">I 2019 meldte JuleJan sin ankomst og jeg har optrådt som julemand, med tilhørende nisse (Min søn Emil på 12 år) hos boligforeninger, virksomheder, daginstitutioner &amp; fagforeninger, hvor jeg enten kombinerer med 2 shows, først som Julemand og derefter tryllekunstner, eller som tryllende Julemand, selvom Julemanden normalt ikke kan trylle 😉</p>\n +
    <p style="text-align: center;">Idag, holder jeg især af at trylle for børn, unge og voksne til for eksempel børnefødselsdage, konfirmationer, bryllupper, firmaarrangementer, klubmøder og lign. Så kontakt mig for et godt tilbud til at gøre netop dit arrangement helt fortryllende!</p>\n +
    <p style="text-align: center;">Tøv ikke med at tjekke min Facebook side ud, hvor der er en del mere liv og opdateringer 🙂</p>\n +
    <p>&nbsp;[/vc_column_text][/vc_column][/vc_row][vc_row][vc_column][vc_icon icon_fontawesome=&#8221;fa fa-facebook-official&#8221; size=&#8221;xl&#8221; align=&#8221;center&#8221; link=&#8221;url:http%3A%2F%2Fwww.facebook.com%2FTrylleJan||target:%20_blank|&#8221;][vc_btn title=&#8221;.&#8221; style=&#8221;gradient&#8221; gradient_color_1=&#8221;white&#8221; gradient_color_2=&#8221;white&#8221; link=&#8221;url:http%3A%2F%2Fgg0.us%2Fjang|||&#8221;][/vc_column][/vc_row]</p>`
*/
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
      <HtmlText html={data.content.rendered} />
      {/*<div className="flex flex-col gap-4 w-full lg:hidden mx-auto px-5 md:px-10 lg:px-20 xl:px-36 py-10 lg:py-0">
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
      </div>*/}
    </>
  )
}
