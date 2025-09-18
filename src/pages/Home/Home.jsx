import "./Home.css"; // Assuming you have a CSS file for styling
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} className="caption-img" />
          <p>
            Discover his ties to a secret ancient order, a young man living in
            modern-day Istanbul embarks on a quest to uncover his family's
            hidden past and the truth behind a powerful artifact.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Titlecards />
      <div className="more-cards">
        <Titlecards title={"Blockbuster movie"} category={"top_rated"} />
        <Titlecards title={"Only on Netflix"} category={"popular"} />
        <Titlecards title={"Upcoming"} category={"upcoming"} />
        <Titlecards title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
