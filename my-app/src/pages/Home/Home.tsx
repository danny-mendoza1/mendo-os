import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className={styles.container}>
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}
