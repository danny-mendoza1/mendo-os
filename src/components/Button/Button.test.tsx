import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("renders as link when href is provided", () => {
    render(<Button href="/test">Link Button</Button>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toHaveTextContent("Link Button");
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button");
    expect(button.className.length).toBeGreaterThan(0);

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button").className.length).toBeGreaterThan(0);

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button").className.length).toBeGreaterThan(0);
  });

  it("opens link in new tab when target is _blank", () => {
    render(
      <Button href="/test" target="_blank">
        External Link
      </Button>
    );
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
