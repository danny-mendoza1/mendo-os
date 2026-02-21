import { describe, it, expect, vi, beforeEach } from "vitest";
import { scrollTo } from "./scrollTo";

describe("scrollTo", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("scrolls to element by id string", () => {
    const element = document.createElement("div");
    element.id = "test-id";
    document.body.appendChild(element);

    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    scrollTo("test-id");

    expect(scrollToMock).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: "smooth",
    });
    document.body.removeChild(element);
  });

  it("scrolls to element by selector string", () => {
    const element = document.createElement("div");
    element.className = "test-class";
    document.body.appendChild(element);

    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    scrollTo(".test-class");

    expect(scrollToMock).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: "smooth",
    });
    document.body.removeChild(element);
  });

  it("scrolls to HTMLElement directly", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);

    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    scrollTo(element);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: "smooth",
    });
    document.body.removeChild(element);
  });

  it("handles non-existent id gracefully", () => {
    expect(() => {
      scrollTo("non-existent-id");
    }).not.toThrow();
  });

  it("handles non-existent selector gracefully", () => {
    expect(() => {
      scrollTo(".non-existent-class");
    }).not.toThrow();
  });

  it("handles null element gracefully", () => {
    expect(() => {
      scrollTo(null as unknown as string);
    }).not.toThrow();
  });

  it("uses custom header offset when provided", () => {
    const element = document.createElement("div");
    element.id = "offset-test";
    document.body.appendChild(element);

    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    scrollTo("offset-test", 100);

    expect(scrollToMock).toHaveBeenCalled();
    document.body.removeChild(element);
  });
});
