import React, { useMemo } from "react";
import parse, {
  attributesToProps,
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";
import Image from "next/image";
import { hyphenateHTML } from "../utils/hyphenation";

function isElement(domNode: DOMNode): domNode is Element {
  // @ts-ignore
  return !!(domNode instanceof Element || domNode.attribs);
}

export const defaultOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (isElement(domNode)) {
      if (domNode.name === "img") {
        const props = attributesToProps(domNode.attribs);
        const w = parseInt(props.width as string);
        const h = parseInt(props.height as string);

        return props.type === "image" ? (
          <Image
            className="my-8"
            alt={props.alt as string}
            width={2048}
            height={(2048 * h) / w}
            src={{
              src: props.src as string,
              width: 2048,
              height: (2048 * h) / w,
            }}
          />
        ) : null;
      }
      if (domNode.name === "h1") {
        const props = attributesToProps(domNode.attribs);

        return (
          <h1 {...props} className="text-2xl lg:text-4xl">
            {domToReact(domNode.children as DOMNode[])}
          </h1>
        );
      }
    }
  },
};

interface HtmlTextProps {
  html?: string;
  options?: HTMLReactParserOptions;
  hyphenate?: boolean;
}

/**
 * Convert HTMLText to React output. This is rendered without any wrapping content,
 * so make sure to wrap this with `prose` or similar to get the correct styling.
 **/
export function HtmlText({
  html,
  options = defaultOptions,
  hyphenate = true,
}: HtmlTextProps) {
  return useMemo(
    () => (
      <>
        {html
          ? parse(
              hyphenate ? hyphenateHTML(html) : html,
              options || defaultOptions,
            )
          : null}
      </>
    ),
    [html, options, hyphenate],
  );
}
