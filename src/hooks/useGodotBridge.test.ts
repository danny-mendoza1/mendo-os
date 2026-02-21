import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useGodotBridge } from "./useGodotBridge";

describe("useGodotBridge", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it("initializes with default state", () => {
    const { result } = renderHook(() => useGodotBridge());

    expect(result.current.iframeRef.current).toBeNull();
    expect(result.current.isDamaged).toBe(false);
    expect(typeof result.current.handleIframeLoad).toBe("function");
  });

  it("sets isDamaged to true when damage event is received", () => {
    const { result } = renderHook(() => useGodotBridge());

    act(() => {
      const event = new CustomEvent("godotGameEvent", {
        detail: { eventName: "damage" },
      });
      window.dispatchEvent(event);
    });

    expect(result.current.isDamaged).toBe(true);
  });

  it("resets isDamaged to false after 200ms", () => {
    const { result } = renderHook(() => useGodotBridge());

    act(() => {
      const event = new CustomEvent("godotGameEvent", {
        detail: { eventName: "damage" },
      });
      window.dispatchEvent(event);
    });

    expect(result.current.isDamaged).toBe(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.isDamaged).toBe(false);
  });

  it("ignores non-damage events", () => {
    const { result } = renderHook(() => useGodotBridge());

    act(() => {
      const event = new CustomEvent("godotGameEvent", {
        detail: { eventName: "other" },
      });
      window.dispatchEvent(event);
    });

    expect(result.current.isDamaged).toBe(false);
  });

  it("cleans up event listener on unmount", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useGodotBridge());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("godotGameEvent", expect.any(Function));
  });
});
