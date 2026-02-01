import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card Component", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="custom-card">Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("custom-card");
    // CSS Module classes are hashed, just verify it has some class
    expect(card.className).toContain("custom-card");
  });

  it("renders multiple children", () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
      </Card>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });
});
