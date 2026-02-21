import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    }
    // Note: ScrollRestoration handles scroll-to-top for route changes without hash
  }, [pathname, hash]);
}
