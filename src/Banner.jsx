import Image from "next/image";
import styles from "../styles/Home.module.css";

function Banner() {
  return (
    <Image
      src="/banner.jpg"
      alt="Picture of the author"
      width={1322}
      height={500}
      className={styles.banner}
    />
  );
}

export default Banner;
