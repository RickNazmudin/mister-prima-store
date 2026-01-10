"use client";

import { useEffect } from "react";

export default function HydrationFix() {
  useEffect(() => {
    const unwanted = ["bis_register", "__processed_", "bis_skin_checked"];

    // Hapus attribute yang ada
    unwanted.forEach((attr) => {
      if (document.body.hasAttribute(attr)) {
        document.body.removeAttribute(attr);
      }
    });

    // Pantau kalau ditambahkan lagi oleh extension
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const attrName = mutation.attributeName;
          if (unwanted.some((a) => attrName?.includes(a))) {
            document.body.removeAttribute(attrName!);
          }
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
