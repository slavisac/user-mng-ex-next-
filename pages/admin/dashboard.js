import NavDrawer from "../../layout/NavDrawer";
import styles from "../../styles/Home.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          Orders <code className={styles.code}></code>
        </p>
      </main>
    </div>
  );
};

Dashboard.Layout = NavDrawer;

export default Dashboard;
