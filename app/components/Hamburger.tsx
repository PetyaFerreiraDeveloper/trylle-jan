import * as React from "react";
import { LazyMotion, MotionConfig, m } from "framer-motion";
const loadFeatures = () =>
  import("../utils/motion-features").then((res) => res.default);

type Props = { open: boolean; className?: string; animate?: boolean };

const transition = {
  type: "tween",
  duration: 0.2,
  ease: "easeInOut",
};

const topVariants = {
  closed: { rotate: -45, y: 6, x: 0 },
  open: { rotate: 0, y: 0 },
};

const middleVariants = {
  closed: { rotate: -45, y: 0 },
  open: { rotate: 0 },
};

const bottomVariants = {
  closed: { rotate: 45, y: -6, x: 0 },
  open: { rotate: 0, y: 0 },
};

function Hamburger({ open = false, className, animate }: Props) {
  if (animate) {
    return (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        focusable={false}
        className={className}
      >
        <LazyMotion features={loadFeatures}>
          <MotionConfig transition={undefined} reducedMotion={"user"}>
            <g fill="currentColor">
              <m.path
                d="M4.222 2.808l16.97 16.97-1.414 1.414-16.97-16.97z"
                animate={open ? "open" : "closed"}
                variants={topVariants}
                transition={transition}
                className="burger-top !origin-center"
                initial={false}
              />
              <m.path
                d="M4.222 2.808l16.97 16.97-1.414 1.414-16.97-16.97z"
                animate={open ? "open" : "closed"}
                variants={middleVariants}
                transition={transition}
                className="burger-middle !origin-center"
                initial={false}
              />
              <m.path
                d="M2.808 19.778l16.97-16.97 1.414 1.414-16.97 16.97z"
                animate={open ? "open" : "closed"}
                variants={bottomVariants}
                transition={transition}
                className="burger-bottom !origin-center"
                initial={false}
              />
            </g>
          </MotionConfig>
        </LazyMotion>
      </svg>
    );
  }

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      focusable={false}
      className={className}
    >
      {open ? (
        <g fill="currentColor">
          <path d="M4.222 2.808l16.97 16.97-1.414 1.414-16.97-16.97z" />
          <path d="M2.808 19.778l16.97-16.97 1.414 1.414-16.97 16.97z" />
        </g>
      ) : (
        <path d="M0 5h24v2H0zm0 6h24v2H0zm0 6h24v2H0z" fill="currentColor" />
      )}
    </svg>
  );
}

export default Hamburger;
