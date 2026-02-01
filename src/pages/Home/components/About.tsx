import { personalInfo } from "../../../data/resume";
import { Button } from "../../../components/Button/Button";
import styles from "./About.module.css";
import headshot from "../../../assets/walter-headshot.png";

export function About() {
  return (
    <section id="about" className={`${styles.container} animate-fade-in-up`}>
      <div className={styles.contentLeft}>
        <span className={styles.eyebrow}>Hi, my name is</span>
        <h1 className={styles.title}>
          {personalInfo.name}.
          <br />
          <span className={styles.highlight}>I debug the impossible.</span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer taking lessons learned from debugging distributed systems to
          build resilient applications. I enjoy writing code to solve real problems from
          <strong className="text-primary"> Rails monoliths</strong> to
          <strong className="text-primary"> React tooling</strong> and I've optimized workflows that
          saved teams 21+ hours weekly.
        </p>

        <div className={styles.actions}>
          <Button variant="primary" href="/Walter_Mendoza_Resume.pdf" target="_blank">
            Download Resume
          </Button>
          <Button variant="secondary" href="#projects">
            Check out my projects ↓
          </Button>
        </div>
      </div>

      <div className={`${styles.imageWrapper} animate-fade-in delay-300`}>
        <img src={headshot} alt="Walter Mendoza" className={styles.headshot} />
        <div className={styles.glowEffect} />
      </div>
    </section>
  );
}
