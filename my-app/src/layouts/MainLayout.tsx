import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.paper}>

                <header className={styles.toolbar}>
                    <nav>
                    <a href="/" className="font-bold text-primary">MENDOZA.DEV</a>

                    </nav>
                    <nav className="flex gap-6">
                        <a href="#about" className="text-muted hover:text-primary transition">About</a>
                        <a href="#experience" className="text-muted hover:text-primary transition">Experience</a>
                        <a href="#projects" className="text-muted hover:text-primary transition">Projects</a>
                    </nav>
                </header>

                <main className={styles.content}>
                    <Outlet />
                </main>


            </div>
        </div>
    )
}
  