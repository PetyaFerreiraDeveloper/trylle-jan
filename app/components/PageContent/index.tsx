import Image from "next/image";
import { HtmlText } from "@/app/components/HtmlText";

type Props = {
  text: string;
  imageUrl: string;
  secretBtn?: boolean;
};

export const PageContent = ({ text, imageUrl, secretBtn }: Props) => {
  const purgedText = text.replace(/\{[^{}]*\}|\([^()]*\)|\[[^[\]]*\]/g, "");

  return (
    <>
      <section className="relative flex w-full min-[1366px]:h-dvh items-start justify-center overflow-hidden flex-col lg:flex-row pt-[88px] md:pt-0 gap-6 px-0">
        <Image
          src={imageUrl}
          alt={"Hero image"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority={true}
        />
        <div className="absolute z-10 bottom-0 w-full h-40 flex bg-gradient-to-t from-white to-white/0"></div>
        <div className="absolute z-10 top-32 right-0 w-fit h-fit flex">
          {/* -- TrustBox widget - Review Collector -- */}
          <div
            className="trustpilot-widget p-2"
            data-locale="da-DK"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="62f2414a683a1b737f983dd9"
            data-style-height="52px"
            data-style-width="100%"
          >
            <a href="https://dk.trustpilot.com/review/tryllejan.dk" target="_blank" rel="noopener">Trustpilot</a>
          </div>
          {/* -- End TrustBox widget -- */}
        </div>
      </section>
      <section className="flex flex-col px-5 md:px-10 lg:px-20 xl:px-36 lg:text-xl">
        <HtmlText html={purgedText} />
      </section>
      {secretBtn ? (
        <a href="http://gg0.us/jang">
          <p className="p-10 -mb-10"></p>
        </a>
      ) : null}
    </>
  );
};
