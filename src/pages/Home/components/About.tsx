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
          <span className={styles.highlight}>The Forensic Debugger.</span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer thats optimized workflows and saved teams
          <strong className="text-primary"> 21+ hours weekly. </strong>I build efficient, reliable
          software that solves complex real-world problems. Ready to see what I can do?
        </p>

        <div className={styles.actions}>
          <Button variant="primary" href="#projects">
            View My Work
          </Button>
          <Button variant="secondary" href="/Walter_Mendoza_Resume.pdf" target="_blank">
            Download Resume
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
