import ButtonSite from "../../UI/ButtonSite";
import imgEntertainment from "../../assets/images/entertainment.webp";

const Entertainment = ({ index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src={imgEntertainment}
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Entertainment</h2>
        <p>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <ButtonSite text="view project" link="/portfolio/entertainment" />
      </div>
    </div>
  );
};

export default Entertainment;
