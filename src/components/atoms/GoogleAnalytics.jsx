import Script from "next/script";
import React from "react";

import { existsGaId, GA_ID } from "@/lib/gtag";

const GoogleAnalytics = () => {
  return (
    <>
      {existsGaId && (
        <>
          {/* Google Analytics */}
          <Script
            defer
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga" defer strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default GoogleAnalytics;
