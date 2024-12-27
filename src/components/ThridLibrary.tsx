"use client";

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

const ThirdLibrary = () => {
  useEffect(() => {
    Observer.start();
  }, []);

  return null;
};

export default ThirdLibrary;
