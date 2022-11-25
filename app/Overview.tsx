import Image from "next/image";
import styles from "./../styles/Overview.module.css"

const Overview = () => {
  return (
    <div >
      <div className={`${styles["overview"]} section-padding`} id="home">
        <div className="overview-content">
          <h1 className={styles["overview-content_h1"]}>Monitor your business on real-time dashboard</h1>
          <p className={styles["overview-content_p"]}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, sit! Voluptates velit voluptatum veritatis maiores adipisci ea iste quibusdam repudiandae eum, consectetur totam ipsam, sequi, excepturi nemo error nesciunt aspernatur!</p>

          <div className={styles["overview-input"]}>
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Try for free</button>
          </div>

          <div className={styles["overview-content_people"]}>
            <p className={styles["overview-content_people_p"]}>100 people has requested to try this application</p>
          </div>



        </div>
        <div className="overview-image">
          <div className={styles["main-screen_container"]}>
            <Image id={styles["main-screen"]} src="/main-screen.svg" alt="main-screen" width={804} height={804} />

          </div>
          <div className={styles["chart_container"]}>
            <Image id={styles["chart"]} src="/chart-3.svg" alt="chart" width={804} height={804} />
          </div>
        </div>
      </div>
      <div className={styles["overview_bg"]}></div>
      <div className={styles["overview_bg2"]}></div>
    </div>
  );
};

export default Overview;
