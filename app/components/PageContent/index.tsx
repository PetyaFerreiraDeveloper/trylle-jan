import Image from "next/image";
import { HtmlText } from "@/app/components/HtmlText";

export const PageContent = ({data}: any) => {
  const purgedText = data.content.rendered.replace(/\{[^{}]*\}|\([^()]*\)|\[[^[\]]*\]/g,"");

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
      <HtmlText html={purgedText} />
    </>
  )
}
