import { Card } from "../../../components/Card/Card";
import { Button } from "../../../components/Button/Button";
import { Contact } from "../../Home/components/Contact";
import { Github, CircleCheckBig, FlaskConical, ExternalLink } from "lucide-react";
import { scrollToElement } from "../../../utils/scrollTo";
import styles from "./FinancialTool.module.css";

export function FinancialTool() {
  const scrollToDemo = () => {
    scrollToElement("live-demo");
  };

  return (
    <div className={`${styles.container} animate-fade-in-up`}>
      <header className={styles.header}>
        <div className={styles.tagline}>FEATURED CASE STUDY</div>
        <h1 className={styles.title}>Financial Data Reconciliation Engine</h1>

        <p className={styles.summary}>
          A client-side tool that automates the detection of duplicate accounting entries. Born from
          a need to reduce manual data entry, this project became my crash course in
          <strong> algorithmic efficiency</strong> and <strong>browser memory management</strong>.
        </p>

        <div className={styles.headerButtons}>
          <Button variant="outline" onClick={scrollToDemo} className={styles.demoButton}>
            <ExternalLink size={20} />
            <span>View Live Demo</span>
          </Button>
          <Button
            variant="outline"
            href="https://github.com/danny-mendoza1/duplicate-accounting-finder"
            target="_blank"
            className={styles.githubButton}
          >
            <Github />
            <span>View Source & Docs</span>
          </Button>
        </div>

        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>21 hrs</span>
            <span className={styles.metricLabel}>Saved Weekly</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>O(N+M)</span>
            <span className={styles.metricLabel}>Time Complexity</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>100%</span>
            <span className={styles.metricLabel}>Type Safety</span>
          </div>
        </div>
      </header>

      <section className={styles.contentBlock}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">01.</span>
          The Performance Bottleneck
        </h2>

        <p className={styles.textBlock}>
          <strong>The Mistake:</strong> My initial implementation used a standard nested loop to
          compare rows. It worked fine for 50 rows, but when I tested it with a real client dataset
          (5,000+ rows),
          <strong> the browser completely froze</strong>.
        </p>
        <p className={styles.textBlock}>
          I realized that comparing every bank transaction against every accounting record created a
          quadratic workload—O(N×M) complexity meant 25 million comparisons for just 5,000 rows. I
          needed a way to look up records instantly.
        </p>

        <div className={styles.algoVisual}>
          <div
            className={styles.algoCard}
            style={{ opacity: 0.8, borderColor: "hsl(var(--color-destructive) / 0.3)" }}
          >
            <span className={styles.algoTitle}>Attempt #1: Nested Loops</span>
            <div className={styles.barContainer}>
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className={styles.bar}
                  style={{ height: "100%", background: "#ef4444" }}
                />
              ))}
            </div>
            <div className={styles.algoStat} style={{ color: "#ef4444" }}>
              ~12 Seconds
            </div>
            <div className="text-sm text-muted-foreground">Result: UI Unresponsive</div>
          </div>

          <div className={`${styles.algoCard} border-primary`}>
            <span className={styles.algoTitle} style={{ color: "hsl(var(--color-primary))" }}>
              Attempt #2: Hash Map Index
            </span>
            <div className={styles.barContainer}>
              <div className={`${styles.bar} highlight`} style={{ height: "5%", width: "100%" }} />
            </div>
            <div className={styles.algoStat} style={{ color: "hsl(var(--color-primary))" }}>
              ~0.05 Seconds
            </div>
            <div className="text-sm text-muted-foreground">Result: Instant Filter</div>
          </div>
        </div>

        <p className={styles.textBlock}>
          <strong>The Lesson:</strong> Through research and iteration, I learned about{" "}
          <strong>Big O notation</strong> and Hash Maps. By pre-indexing one dataset into a Map
          (Dictionary) in O(N) time, then looking up each item from the second dataset in O(M) time,
          I achieved O(N+M) linear complexity instead of O(N×M) quadratic.
        </p>

        <div className={styles.codeBlock}>
          <pre>{`// src/core/grouping.ts

// 1. Create the dictionary (O(N) where N = buildiumRecords.length)
const buildiumIndex = new Map<string, CsvRecord[]>();

// 2. Index the first dataset
for (const record of buildiumRecords) {
  const k = keyify(record);
  if (!buildiumIndex.has(k)) buildiumIndex.set(k, []);
  buildiumIndex.get(k)!.push(record);
}

// 3. Lookup from second dataset (O(M) where M = billsRecords.length)
for (const bill of billsRecords) {
  // Hash map lookup is O(1), making total complexity O(N+M)
  const matches = buildiumIndex.get(keyify(bill)); 
}`}</pre>
        </div>
      </section>

      <section className={styles.contentBlock}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">02.</span>
          Architectural Decisions
        </h2>
        <p className={styles.textBlock}>
          Because I was dealing with real financial data, I couldn't just "hack it together." I had
          to research security best practices for handling sensitive CSVs in the browser.
        </p>

        <div className={styles.adrGrid}>
          {/* ADR 001 */}
          <div className={styles.adrCard}>
            <div className={styles.adrHeader}>
              <span>CONSTRAINT</span>
              <span className={styles.adrStatus}>SECURITY</span>
            </div>
            <h3 className={styles.adrTitle}>Why Client-Side Only?</h3>
            <p className="text-sm text-muted-foreground">
              I considered building a Python backend, but realized that sending financial PII to a
              server created unnecessary liability. Keeping everything in the user's browser memory
              was the safest approach.
            </p>
          </div>

          {/* ADR 002 */}
          <div className={styles.adrCard}>
            <div className={styles.adrHeader}>
              <span>CONSTRAINT</span>
              <span className={styles.adrStatus}>PRIVACY</span>
            </div>
            <h3 className={styles.adrTitle}>No Persistent Storage</h3>
            <p className="text-sm text-muted-foreground">
              I initially thought about saving data to LocalStorage for convenience. However, I
              learned that LocalStorage persists even after the tab closes, which is a risk on
              shared computers. I opted for ephemeral state instead.
            </p>
          </div>

          {/* ADR 004 */}
          <div className={styles.adrCard}>
            <div className={styles.adrHeader}>
              <span>CONSTRAINT</span>
              <span className={styles.adrStatus}>SAFETY</span>
            </div>
            <h3 className={styles.adrTitle}>Strict CSP</h3>
            <p className="text-sm text-muted-foreground">
              To prevent XSS attacks from malicious CSV files, I learned how to configure strict CSP
              headers that block all external scripts and analytics trackers.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentBlock}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">03.</span>
          CI/CD & Reliability
        </h2>
        <p className={styles.textBlock}>
          A tool dealing with financial data cannot fail silently. I treated this internal tool like
          a production product, implementing a robust <strong>CI/CD pipeline</strong> to catch
          regressions before they hit the `main` branch.
        </p>

        <div className={styles.ciGrid}>
          <Card className={styles.ciCard}>
            <div className={styles.ciHeader}>
              <div className={styles.iconWrapper}>
                <CircleCheckBig className="text-green-500" />
              </div>
              <h3>GitHub Actions Pipeline</h3>
            </div>

            <p className={styles.ciDescription}>
              Automated workflow (<code>.github/workflows/ci.yml</code>) that runs on every Push and
              Pull Request.
            </p>

            <div className={styles.stepList}>
              <div className={styles.stepItem}>
                <span className={styles.check}>✓</span>
                <span>Checkout Code</span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.check}>✓</span>
                <span>Install Dependencies (Clean CI)</span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.check}>✓</span>
                <span>Linting (ESLint + Prettier)</span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.check}>✓</span>
                <span>Run Unit Tests (Vitest)</span>
              </div>
              <div className={styles.stepItem}>
                <span className={styles.check}>✓</span>
                <span>Build Production Bundle</span>
              </div>
            </div>
          </Card>

          <Card className={styles.ciCard}>
            <div className={styles.ciHeader}>
              <div className={styles.iconWrapper}>
                <FlaskConical className="text-blue-500" />
              </div>
              <h3>Testing Strategy</h3>
            </div>

            <p className={styles.ciDescription}>
              I used <strong>Vitest</strong> for instant feedback loops, focusing on the critical
              path: the reconciliation logic.
            </p>

            <ul className={styles.stepList}>
              <li className={styles.stepItem}>
                <span className="text-primary">core/grouping.ts</span>
                <span>Unit tests to verify O(N) grouping logic and edge cases.</span>
              </li>
              <li className={styles.stepItem}>
                <span className="text-primary">helpers/parsers.ts</span>
                <span>Tests to ensure CSV parsing handles diverse bank formats.</span>
              </li>
              <li className={styles.stepItem}>
                <span className="text-primary">components/</span>
                <span>Smoke tests ensuring UI renders without crashing.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="live-demo" className={styles.demoSection}>
        <h2 className={styles.sectionTitle}>
          <span className="text-primary font-mono text-xl">04.</span>
          Try It Yourself
        </h2>
        <p className={styles.textBlock}>
          The tool is fully functional and deployed. Upload your own CSV files to see the
          reconciliation engine in action.
        </p>

        <Card className="p-0 overflow-hidden border-none">
          <div className={styles.browserHeader}>
            <div className={styles.dots}>
              <div className={styles.dot} style={{ background: "#ff5f56" }} />
              <div className={styles.dot} style={{ background: "#ffbd2e" }} />
              <div className={styles.dot} style={{ background: "#27c93f" }} />
            </div>
            <div className={styles.urlBar}>
              danny-mendoza1.github.io/duplicate-accounting-finder
            </div>
          </div>
          <iframe
            src="https://danny-mendoza1.github.io/duplicate-accounting-finder/"
            title="Live Tool Demo"
            className={styles.iframe}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </Card>
        <p className="text-center mt-4 text-muted-foreground text-sm flex justify-center items-center gap-2">
          <span>⚠️</span>
          <span>
            <strong>Privacy Note:</strong> This application runs entirely in your browser. No data
            is uploaded.
          </span>
        </p>
      </section>

      <Contact />
    </div>
  );
}
