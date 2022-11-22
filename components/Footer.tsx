import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/Footer.module.css";
import LogoLinks from "./LogoLinks";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-links"]}>
        <div className={styles["footer-links-logo"]}>
          <Link href="/">
            <Image
              src="/images/logo-purple.svg"
              alt="logo"
              width={"1000"}
              height={"1000"}
              style={{ width: "auto", height: "50px" }}
            />
          </Link>
        </div>
        <div className="footer-links_container">
          <LogoLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
