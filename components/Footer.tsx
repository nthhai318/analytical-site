import Image from "next/image";

const Footer = () => {
  return (
    <>
      <h2>Footer</h2>
      <Image
        src="/images/logo-purple.svg"
        alt="logo"
        width={"1000"}
        height={"1000"}
        style={{ width: "auto", height: "50px" }}
      />
    </>
  );
};

export default Footer;
