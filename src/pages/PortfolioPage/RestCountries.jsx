import ButtonSite from "../../UI/ButtonSite";
import imgRestCountries from "../../assets/images/restCountries--dark.webp";

const RestCountries = () => {
  return (
    <div className="portfolio_box">
      <div className="portfolio_image">
        <img
          src={imgRestCountries}
          alt="Entertainment app"
          className="portfolio_image--detail"
        />
      </div>
      <div className="portfolio_info">
        <h2>Rest Countries</h2>
        <p>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <ButtonSite text="view project" />
      </div>
    </div>
  );
};

export default RestCountries;
