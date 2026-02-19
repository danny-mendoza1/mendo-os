import { personalInfo } from "../../../data/resume";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../../../components/Button/Button";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`${styles.container} animate-fade-in-up delay-400`}>
      <h2 className={styles.sectionTitle}>Get In Touch</h2>

      <div className={styles.content}>
        <p className={styles.description}>
          I'm looking for a <strong className="text-primary">full-stack role</strong> where I can
          leverage my experience building production-grade applications, optimizing performance, and
          creating useful tools designed for the real world. If you'd like to work with a developer
          who debugs like a detective and builds like an engineer, contact me!
        </p>

        <div className={styles.contactMethods}>
          <a href={`mailto:${personalInfo.email}`} className={styles.emailButton}>
            <Mail />
            {personalInfo.email}
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Github />
            <span>View GitHub Profile</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Linkedin />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        <div className={styles.resume}>
          <p className="text-muted-foreground text-sm">Want the traditional format?</p>
          <Button variant="secondary" href="/Walter_Mendoza_Resume.pdf" target="_blank">
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
