"use client";

import { useEffect } from "react";

export const GoogleTagManager = () => {
  useEffect(() => {
    const scriptId = "google-tag-manager";

    // Verifica se o script já foi adicionado
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16530132041";
    script.async = true;
    script.id = scriptId;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-ignore

      window.dataLayer = window.dataLayer || [];

      // @ts-ignore

      function gtag() {
        // @ts-ignore

        dataLayer.push(arguments);
      }
      // @ts-ignore

      gtag("js", new Date());
      // @ts-ignore

      gtag("config", "AW-16530132041");
    };
  }, []);

  return null;
};
