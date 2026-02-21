
export function scrollTo(target: string | HTMLElement, headerOffset: number = 80): void {
  let element: Element | null = null;

  if (typeof target === "string") {
    // Try as ID first (most common case)
    element = document.getElementById(target);
    // If not found, try as CSS selector
    if (!element) {
      element = document.querySelector(target);
    }
  } else {
    element = target;
  }

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Legacy exports for backward compatibility - can be removed once all usages are updated
export const scrollToElement = (elementId: string, headerOffset?: number) =>
  scrollTo(elementId, headerOffset);
export const scrollToSelector = (selector: string, headerOffset?: number) =>
  scrollTo(selector, headerOffset);
