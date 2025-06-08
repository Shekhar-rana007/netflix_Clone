import React, { lazy, Suspense } from "react";
const TitleCard = lazy(() => import("../../components/Titlecard/TitelCard"));
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
// import TitelCard from "../../components/Titlecard/TitelCard";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="hero_banner" className="banner-img" />
          <div className="hero-caption">
            <img src={hero_title} alt="hero_title" className="caption-img" />
            <p>
              Discovering his ties to a secret ancient order, a young man living
              in modern Istanbul embarks on a quest to save the city from an
              immortal enemy.
            </p>
            <div className="hero_btn">
              <button className="btn">
                <img src={play_icon} alt="" />
                Play
              </button>
              <button className="btn dark_btn">
                <img src={info_icon} alt="" />
                More Info
              </button>
            </div>
          </div>
        </div>
        {/* <TitelCard page={1}/> */}
        <Suspense fallback={<div>Loading cards...</div>}>
          <TitleCard page={1} category={"now_playing"}  />
        </Suspense>

        <div className="more-cards">
          <Suspense fallback={<div>Loading cards...</div>}>
            <TitleCard category={"top_rated"} page={2} title={"Blockbuster Movie"} />
          </Suspense>
          <Suspense fallback={<div>Loading cards...</div>}>
            <TitleCard category={"now_playing"} page={3} title={"Only on Netflix"} />
          </Suspense>
          <Suspense fallback={<div>Loading cards...</div>}>
            <TitleCard category={"popular"} page={4} title={"Upcommings"} />
          </Suspense>
          <Suspense fallback={<div>Loading cards...</div>}>
            <TitleCard category={"now_playing"} page={5} title={"Top pics for you"}/>
          </Suspense>

          {/* <TitelCard title={"Blockbuster movies"} page={2} />
          <TitelCard title={"Only on netflix"} page={3} />
          <TitelCard title={"Upcomming"} page={4} />
          <TitelCard title={"Top pics for you"} page={5} /> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
