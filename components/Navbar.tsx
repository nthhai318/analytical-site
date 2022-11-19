"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import styles from "../styles/Navbar.module.css";

const Menu = () => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} href="/">
        <p className={styles["navbar-links_item"]}>Product</p>
      </Link>

      <Link style={{ textDecoration: "none" }} href="/">
        <p className={styles["navbar-links_item"]}>Pricing</p>
      </Link>

      <Link style={{ textDecoration: "none" }} href="/">
        <p className={styles["navbar-links_item"]}>FAQ</p>
      </Link>

      <Link style={{ textDecoration: "none" }} href="/">
        <p className={styles["navbar-links_item"]}>Blog</p>
      </Link>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);

  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar-links"]}>
        <div className={styles["navbar-links-logo"]}>
          <Link style={{ textDecoration: "none" }} href="/">
            <Image
              className={styles["navbar-links-logo_image"]}
              src="/images/logo-red-white.svg"
              alt="logo"
              width={"1000"}
              height={"1000"}
            />
          </Link>
        </div>
        <div className={styles["navbar-links_container"]}>
          <Menu />
        </div>
        <div className={styles["navbar-sign"]}>
          <Link style={{ textDecoration: "none" }} href="/signin">
            <p className={styles["navbar-sign_button"]}>Sign in</p>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/signup">
            <p className={`${styles["navbar-sign_button"]} ${styles["sign-status"]}`}>Sign up</p>
          </Link>
        </div>
        <div className={styles["navbar-menu"]}>
          {toggleMenu ? (
            <RiCloseLine
              className={styles["menu-button"]}
              color="#fff"
              size={"27"}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              className={styles["menu-button"]}
              color="#fff"
              size={"27"}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className={`${styles["navbar-menu_container"]} ${styles["scale-up-center"]}`}>
              <div className="navbar-menu_container-links">
                <Menu />
                <Link style={{ textDecoration: "none" }} href="/signin">
                  <p className={styles["navbar-links_item"]}>Sign in</p>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <p className={`${styles["navbar-links_item"]} ${styles["sign-status"]}`}>Sign up</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
