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
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <ButtonSite text="view project" link="/portfolio/planetfacts" />
      </div>
    </div>
  );
};

export default PlanetFacts;
