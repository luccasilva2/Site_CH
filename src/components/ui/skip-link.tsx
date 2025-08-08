"use client";

import { useState } from "react";

export function SkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <a
      href="#main-content"
      className={`fixed top-0 left-0 z-[100] -translate-y-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
        isVisible ? "translate-y-0" : ""
      }`}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      Pular para conteúdo principal
    </a>
  );
}
