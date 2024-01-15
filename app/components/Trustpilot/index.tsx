'use client'

const TrustpilotWidget = () => {
  return (
    <div className="absolute z-10 top-32 right-0 w-fit h-fit flex">
      {/* -- TrustBox widget - Review Collector -- */}
      <div
        className="trustpilot-widget"
        data-locale="da-DK"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="62f2414a683a1b737f983dd9"
        data-style-height="52px"
        data-style-width="100%"
      >
        <a
          href="https://dk.trustpilot.com/review/tryllejan.dk"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
      {/* -- End TrustBox widget -- */}
    </div>
  );
};

export default TrustpilotWidget;
