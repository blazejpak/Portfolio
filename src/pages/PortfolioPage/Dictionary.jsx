import ButtonSite from "../../UI/ButtonSite";
import imgDictionary from "../../assets/images/dictionary_dark.webp";

const Dictionary = () => {
  return (
    <div className="portfolio_box">
      <div className="portfolio_image">
        <img
          src={imgDictionary}
          alt="Entertainment app"
          className="portfolio_image--detail"
        />
      </div>
      <div className="portfolio_info">
        <h2>Dictionary</h2>
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

export default Dictionary;
