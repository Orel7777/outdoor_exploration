import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import HeroImg from "../src/assets/hero.jpg";
import Explore from "./components/Explore/Explore";
import { Journal } from "./components/Journal/Journal";
import Footer from "./components/Footer/Footer";


const bgHero = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",

}
const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgHero}>
        <Navbar />
        <Hero />
      </div>
        <Explore />
        <Journal/>
        <Footer />
    </div>
  );
};

export default App;
