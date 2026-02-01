import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (e.g., #projects), scroll to that section
    if (hash) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Account for sticky header height (adjust if header height changes)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
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
