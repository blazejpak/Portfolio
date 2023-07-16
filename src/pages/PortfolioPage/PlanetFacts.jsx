import ButtonSite from "../../UI/ButtonSite";
import imgPlanetsFacts from "../../assets/images/planetFacts.webp";

const PlanetFacts = ({ index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src={imgPlanetsFacts}
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Planets Facts</h2>
        <p>
          I have developed a fully responsive multi-page website where you can
          explore and read interesting facts about the planets orbiting around
          the Sun. Each page of the website is dedicated to a specific planet in
          our solar system.
        </p>
        <ButtonSite text="view project" link="/portfolio/planetfacts" />
      </div>
    </div>
  );
};

export default PlanetFacts;
