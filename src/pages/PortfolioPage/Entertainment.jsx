import ButtonSite from "../../UI/ButtonSite";

const Entertainment = ({ index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src="/assets/images/entertainment/entertainment.webp"
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Entertainment App</h2>
        <p>
          Fully responsive multi-page Entertainment App where you can sign in /
          sign up, search and bookmark your favorite movie / serial.
        </p>
        <ButtonSite text="view project" link="/portfolio/entertainment" />
      </div>
    </div>
  );
};

export default Entertainment;
