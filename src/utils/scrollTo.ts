/**
 * Smoothly scrolls to an element by its ID, accounting for fixed header offset
 * @param elementId - The ID of the element to scroll to
 * @param headerOffset - The height of the fixed header (default: 80px)
 */
export function scrollToElement(elementId: string, headerOffset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Smoothly scrolls to an element using a selector, accounting for fixed header offset
 * @param selector - The selector to find the element
 * @param headerOffset - The height of the fixed header (default: 80px)
 */
export function scrollToSelector(selector: string, headerOffset: number = 80): void {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
