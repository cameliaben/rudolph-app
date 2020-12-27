import styles from "../styles/LinkToPage.module.css";

function LinkToPage({ link, header, description }) {
  return (
    <a href={link} className={styles.card}>
      <h3>{header} &rarr;</h3>
      <p>{description}</p>
    </a>
  );
}

export default LinkToPage;
