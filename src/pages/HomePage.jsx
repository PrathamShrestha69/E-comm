import YellowLine from "../components/YellowLine.jsx";
import MostPopular from "../components/MostPopular.jsx";
import HeroMen from "../components/HeroMen.jsx";
import NewArrival from "../components/NewArrival.jsx";
import HeroWomen from "../components/HeroWomen.jsx";
import HomeHero from "../components/HomeHero.jsx";

const HomePage = () => {
  return (
    <div >
      <HomeHero/>
      <YellowLine />
      <MostPopular />
      <HeroMen />
      <NewArrival />
      <HeroWomen />
    </div>
  );
};

export default HomePage;
