import { useState } from "react";
import { useGodotBridge } from "../../../hooks/useGodotBridge";
import { Card } from "../../../components/Card/Card";
import { Button } from "../../../components/Button/Button";
import { IDEWindow } from "../../../components/IDEWindow/IDEWindow";
import { Github, Gamepad2, Lightbulb, Zap, Play } from "lucide-react";
import { scrollToElement } from "../../../utils/scrollTo";
import {
  STATE_PATTERN_GODOT,
  STATE_PATTERN_REACT,
  OBSERVER_PATTERN_GODOT,
  OBSERVER_PATTERN_REACT,
} from "../../../data/gameArchitectureExamples";
import styles from "./GameArchitecture.module.css";

export function GameArchitecture() {
  const { iframeRef, isDamaged, handleIframeLoad } = useGodotBridge();
  const [gameLoaded, setGameLoaded] = useState(false);

  const scrollToDemo = () => {
    scrollToElement("live-demo");
  };

  const loadGame = () => {
    setGameLoaded(true);
  };

  return (
    <div className={`${styles.container} animate-fade-in-up`}>
      <header className={styles.header}>
        <div className={styles.tagline}>PERSONAL DISCOVERY</div>
        <h1 className={styles.title}>React is just a Game Engine at 0 FPS</h1>

        <p className={styles.summary}>
          I started building a 2D Action RPG to challenge myself with a new tech stack. I followed
          beginner tutorials that prioritized speed over structure, which quickly led to rigid and
          inflexible logic. Then I had an epiphany:{" "}
          <strong className="text-primary">
            Game Dev patterns are just Web Dev patterns in disguise
          </strong>
          . Using my React knowledge, I began to refactor the entire codebase and everything
          clicked.
        </p>

        <div className={styles.headerButtons}>
          <Button variant="outline" onClick={scrollToDemo} className={styles.demoButton}>
            <Gamepad2 size={20} />
            <span>Jump to Live Demo</span>
          </Button>
          <Button
            variant="outline"
            href="https://github.com/danny-mendoza1/Games"
            target="_blank"
            className={styles.githubButton}
          >
            <Github />
            <span>View Source & Docs</span>
          </Button>
        </div>
      </header>

      <section className={styles.contentBlock}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">01.</span>
          Pattern #1: The State Pattern
        </h2>

        <p className={styles.textBlock}>
          <strong>The Concept:</strong> My player character had flags like <code>isAttacking</code>{" "}
          and <code>isRunning</code>. The problem: These states could overlap. The character could
          be "running," "attacking," and "dead" at the same time.
        </p>

        <p className={styles.textBlock}>
          Then I learned about <strong>Finite State Machines (FSM)</strong>. In an FSM, only one
          state can be active at a time. I suddenly realized this pattern mirrors a{" "}
          <strong className="text-primary">Redux reducer</strong>: you dispatch an action, exit the
          old state, and enter the new one. Explicit state transitions prevent bugs caused by
          overlapping flags.
        </p>

        <IDEWindow
          godotCode={STATE_PATTERN_GODOT}
          reactCode={STATE_PATTERN_REACT}
          godotFileName="StateMachine.gd"
          reactFileName="useGameReducer.ts"
        />

        <p className={styles.textBlock} style={{ display: "flex", gap: "0.5rem" }}>
          <Lightbulb size={20} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
          <span>
            <strong>Key Takeaway:</strong> Explicit state prevents bugs. Whether you're managing a
            player character or a shopping cart, you want mutually exclusive states—not a boolean
            maze.
          </span>
        </p>
      </section>

      <section className={styles.contentBlock}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">02.</span>
          Pattern #2: The Observer Pattern
        </h2>

        <p className={styles.textBlock}>
          <strong>The Concept:</strong> I needed unrelated objects to communicate—like a Treasure
          Chest opening when the Player presses a button—without hard-coding references.
          <strong>The Problem:</strong> Naive "Global Listeners" waste resources. If every object
          listens to every event constantly, performance tanks.
        </p>

        <p className={styles.textBlock}>
          The solution was a <strong>Conditional Observer</strong>. My objects only "connect" to
          signals when relevant (e.g., when the player is nearby). This mirrors{" "}
          <strong>useEffect cleanup</strong>
          in React: you subscribe to an event, handle it, and—crucially—<strong>
            unsubscribe
          </strong>{" "}
          when the condition changes to prevent memory leaks.
        </p>

        <IDEWindow
          godotCode={OBSERVER_PATTERN_GODOT}
          reactCode={OBSERVER_PATTERN_REACT}
          godotFileName="HitBox.gd"
          reactFileName="useDamageListener.ts"
        />

        <p className={styles.textBlock} style={{ display: "flex", gap: "0.5rem" }}>
          <Lightbulb size={20} style={{ flexShrink: 0, marginTop: "0.2rem" }} />
          <span>
            <strong>Key Takeaway:</strong> Loose coupling makes code maintainable. Signals and event
            listeners let components communicate without depending on each other's internals.
          </span>
        </p>
      </section>

      <section id="live-demo" className={styles.contentBlock}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">03.</span>
          The Playable Prototype
        </h2>
        <p className={styles.textBlock}>
          The ultimate test of architecture is performance. This game runs directly in the browser
          via <strong>WebAssembly</strong>.
        </p>

        <Card className="p-0 overflow-hidden border-none">
          <div className={styles.browserHeader}>
            <div className={styles.dots}>
              <div className={styles.dot} style={{ background: "#ff5f56" }} />
              <div className={styles.dot} style={{ background: "#ffbd2e" }} />
              <div className={styles.dot} style={{ background: "#27c93f" }} />
            </div>
            <div className={styles.urlBar}>game.wmendoza.dev</div>
          </div>
          <div className={`${styles.gameContainer} ${isDamaged ? styles.damaged : ""}`}>
            <div className={`${styles.damageOverlay} ${isDamaged ? styles.active : ""}`} />

            {gameLoaded ? (
              <iframe
                ref={iframeRef}
                src="/portfolio-game/index.html"
                className={styles.iframe}
                title="Godot Game Demo"
                onLoad={handleIframeLoad}
                allow="autoplay; fullscreen"
                tabIndex={-1}
              />
            ) : (
              <div className={styles.gamePlaceholder} onClick={loadGame}>
                <div className={styles.playButtonOverlay}>
                  <Play size={64} className={styles.playIcon} />
                  <span className={styles.playText}>Load Interactive Demo</span>
                  <span className={styles.playSubtext}>Click to start • WebAssembly Game</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        <p className="text-center mt-4 text-muted-foreground text-sm flex justify-center items-center gap-2 flex-wrap">
          <Gamepad2 size={16} />
          <span>
            <strong>Controls:</strong> Use <kbd>Arrow Keys</kbd> to move, <kbd>"Z"</kbd> to attack.
            <span className={styles.mobileOnly}>
              {" "}
              Touch controls may not work on mobile devices.
            </span>
          </span>
        </p>
        <p className="text-center mt-2 text-muted-foreground text-sm flex justify-center items-center gap-2">
          <Zap size={16} />
          <span>
            <strong>Performance Note:</strong> This WebAssembly build maintains 60 FPS through
            optimized state transitions and spatial partitioning.
          </span>
        </p>
      </section>
    </div>
  );
}
