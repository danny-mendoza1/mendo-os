import styles from "./Experience.module.css";
import homeStyles from "../../../pages/Home/Home.module.css";
import { experience } from "../../../data/resume";
import { Card } from "../../../components/Card/Card";

export const Experience = () => {
  return (
    <section id="experience" className="animate-fade-in-up delay-200">
      <h2 className={homeStyles.sectionTitle}>
        <span className="text-primary font-mono text-lg">02.</span> Experience
      </h2>

      <div className={styles.list}>
        {experience.map((job) => (
          <Card key={job.id} className={styles.jobCard}>
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.role}>
                  {job.role}
                  <span className={styles.company}> @ {job.company}</span>
                </h3>
              </div>
              <span className={styles.date}>
                {job.startDate} - {job.endDate}
              </span>
            </div>

            <p className={styles.description}>{job.description}</p>

            <ul className={styles.highlights}>
              {job.highlights.map((point, index) => (
                <li key={`highlight.${index}`} className={styles.highlightItem}>
                  {point}
                </li>
              ))}
            </ul>

            <div className={styles.tags}>
              {job.techStack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
