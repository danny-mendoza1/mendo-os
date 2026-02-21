import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageLoader } from "./PageLoader";

describe("PageLoader Component", () => {
  it("renders loading text", () => {
    render(<PageLoader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders with correct structure", () => {
    const { container } = render(<PageLoader />);
    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.style.display).toBe("flex");
    expect(wrapper.style.justifyContent).toBe("center");
    expect(wrapper.style.alignItems).toBe("center");
  });

  it("renders loading text with proper styling", () => {
    const { container } = render(<PageLoader />);
    const loadingText = container.querySelector("div > div > div") as HTMLElement;

    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveTextContent("Loading...");
  });
});
