"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,     // animation only once
      offset: 120,
    });
  }, []);

  return children;
}