import { useState, useEffect, useRef, useCallback } from "react";

interface GodotGameEventDetail {
  eventName: string;
  [key: string]: unknown;
}

interface GodotWindow extends Window {
  dispatchGameEvent?: (eventName: string, data: Record<string, unknown>) => void;
}

export function useGodotBridge() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isDamaged, setIsDamaged] = useState(false);

  useEffect(() => {
    const handleGameEvent = (event: Event) => {
      // Type guard to ensure event is a CustomEvent with our detail structure
      if (!(event instanceof CustomEvent)) return;

      const detail = event.detail as GodotGameEventDetail | undefined;
      const { eventName } = detail || {};

      if (eventName === "damage") {
        setIsDamaged(true);
        const timer = setTimeout(() => setIsDamaged(false), 200);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("godotGameEvent", handleGameEvent);

    return () => {
      window.removeEventListener("godotGameEvent", handleGameEvent);
    };
  }, []);

  const handleIframeLoad = useCallback(() => {
    const iframeWindow = iframeRef.current?.contentWindow as GodotWindow | null;
    if (iframeWindow) {
      iframeWindow.dispatchGameEvent = (eventName: string, data: Record<string, unknown>) => {
        window.dispatchEvent(
          new CustomEvent<GodotGameEventDetail>("godotGameEvent", {
            detail: { eventName, ...data },
          })
        );
      };
    }
  }, []);

  return {
    iframeRef,
    isDamaged,
    handleIframeLoad,
  };
}
