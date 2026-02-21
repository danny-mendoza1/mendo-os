import { Outlet, ScrollRestoration } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Header } from "../components/Header/Header";
import { useHashNavigation } from "../hooks/useHashNavigation";

export function MainLayout() {
  useHashNavigation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.paper}>
        <Header />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname + location.hash;
        }}
      />
    </div>
  );
}
