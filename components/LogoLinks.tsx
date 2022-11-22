"use client";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import styles from "./../styles/Footer.module.css";

const LogoLinks = () => {
  return (
    <>
      <Link href="/">
        <RiFacebookFill id={styles["FB-logo"]} size={"27"} />
      </Link>
      <Link href="/">
        <RiTwitterFill id={styles["TW-logo"]} size={"27"} />
      </Link>
      <Link href="/">
        <RiInstagramFill id={styles["IG-logo"]} size={"27"} />
      </Link>
    </>
  );
};

export default LogoLinks;
