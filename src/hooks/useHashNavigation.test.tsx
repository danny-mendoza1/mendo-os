import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useHashNavigation } from "./useHashNavigation";

describe("useHashNavigation", () => {
  it("renders without crashing", () => {
    expect(() => {
      renderHook(() => useHashNavigation(), {
        wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
      });
    }).not.toThrow();
  });

  it("renders without crashing with initial hash", () => {
    expect(() => {
      renderHook(() => useHashNavigation(), {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={["/#section"]}>{children}</MemoryRouter>
        ),
      });
    }).not.toThrow();
  });

  it("does not crash when unmounted", () => {
    const { unmount } = renderHook(() => useHashNavigation(), {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });

    expect(() => unmount()).not.toThrow();
  });
});
