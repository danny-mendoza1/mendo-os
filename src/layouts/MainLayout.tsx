import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Header } from "../components/Header/Header";

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paper}>
        <Header />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
