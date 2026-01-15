import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import { Background } from "../Background/Background";

export default function Layout() {
  return (
    <div className={styles.layoutWrapper}>
      {" "}
      <Background />
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
