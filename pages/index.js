import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../src/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rudolph - Travelling through life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Travel &rarr;</h3>
            <p>Places where I've been</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Learn with me &rarr;</h3>
            <p>My programming blog posts</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>DYI &rarr;</h3>
            <p>Made with my bare hands</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Code salad - a bit of everything.</p>
          </a>
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
