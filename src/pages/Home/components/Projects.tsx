import { useNavigate } from "react-router-dom";
import { projects } from "../../../data/resume";
import { Card } from "../../../components/Card/Card";
import homeStyles from "../Home.module.css";
import styles from "./Projects.module.css";

export function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (route?: string, isDisabled?: boolean) => {
    if (route && !isDisabled) {
      navigate(route);
    }
  };

  return (
    <section id="projects" className={`${styles.container} animate-fade-in-up delay-300`}>
      <h2 className={homeStyles.sectionTitle}>
        <span className="text-primary font-mono text-lg">03.</span> Featured Projects
      </h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.internalRoute, project.comingSoon)}
            role="button"
            tabIndex={project.comingSoon ? -1 : 0} // Remove from keyboard tab order if disabled
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && !project.comingSoon) {
                handleProjectClick(project.internalRoute);
              }
            }}
            style={{ cursor: project.comingSoon ? "not-allowed" : "pointer" }}
          >
            <Card
              className={`${styles.projectCard} ${project.comingSoon ? styles.disabledCard : ""}`}
            >
              <div className={styles.header}>
                <div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <div className={styles.tagline}>{project.tagline}</div>
                </div>
                {project.comingSoon && <span className={styles.badge}>Coming Soon</span>}
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.footer}>
                <div className={styles.tags}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <span className={styles.arrow}>→</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
