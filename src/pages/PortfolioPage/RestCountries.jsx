import ButtonSite from "../../UI/ButtonSite";
import imgRestCountries from "../../assets/images/restCountries--dark.webp";

const RestCountries = ({ index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src={imgRestCountries}
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Rest Countries</h2>
        <p>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <ButtonSite text="view project" link="/portfolio/restcountries" />
      </div>
    </div>
  );
};

export default RestCountries;
