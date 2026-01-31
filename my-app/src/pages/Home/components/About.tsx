import { personalInfo } from "../../../data/resume";
import styles from "./About.module.css";
import headshot from '../../../assets/walter-headshot.png';

export const About = () => {
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
          I am a {personalInfo.title} specializing in 
          <strong className="text-primary"> forensic debugging</strong> and 
          <strong className="text-primary"> distributed systems</strong>. 
          I bridge the gap between Support and Engineering.
        </p>
        
        <div className={styles.actions}>
           <a href="/Walter_Mendoza_Resume.pdf" target="_blank" className={styles.primaryButton}>
             Download Resume
           </a>
           <a href="#projects" className={styles.secondaryButton}>
             Check out my projects ↓
           </a>
        </div>
      </div>

      <div className={`${styles.imageWrapper} animate-fade-in delay-300`}>
        <img 
          src={headshot} 
          alt="Walter Mendoza" 
          className={styles.headshot} 
        />

        <div 
          style={{
            position: 'absolute',
            zIndex: -1,
            inset: 0,
            background: 'hsl(var(--color-primary))',
            filter: 'blur(60px)',
            opacity: 0.2,
            borderRadius: '50%'
          }} 
        />
      </div>

    </section>
  );
};
