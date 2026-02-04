import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSelector } from "../utils/scrollTo";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (e.g., #projects), scroll to that section
    if (hash) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        scrollToSelector(hash);
      }, 0);
    } else {
      // No hash, scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);
}
