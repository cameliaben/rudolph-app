import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../src/Banner";
import LinkToPage from "../src/LinkToPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rudolph | Travelling through life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />
        <div className={styles.grid}>
          <LinkToPage
            link="/travel"
            header="Travel"
            description="Places where I've been"
          />
          <LinkToPage
            link="/travel"
            header="Learn"
            description="My programming blog posts"
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
