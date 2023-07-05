import { useEffect, useState } from "react";

export const useScrollToElement = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const scrollToElement = () => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToElement();

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hash]);

  return {hash};
};
