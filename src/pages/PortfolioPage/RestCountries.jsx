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
          This project was created using the RestCountries API. It is a fully
          responsive website where you can read information about various
          countries. You have the ability to choose color themes, search for
          specific countries, and filter them based on your preferences.
        </p>
        <ButtonSite text="view project" link="/portfolio/restcountries" />
      </div>
    </div>
  );
};

export default RestCountries;
