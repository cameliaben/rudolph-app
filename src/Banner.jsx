import Image from "next/image";

function Banner() {
  return (
    <Image
      src="/banner.jpg"
      alt="Picture of the author"
      width={1322}
      height={500}
    />
  );
}

export default Banner;
