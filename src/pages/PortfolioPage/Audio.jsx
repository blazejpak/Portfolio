import ButtonSite from "../../UI/ButtonSite";

const Entertainment = ({ index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src="/assets/images/audiophile/audiophile-mainPage-desktop.webp"
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Audio eCommerce Website</h2>
        <p>
          Fully responsive multi-page Audio eCommerce Website with a shopping
          cart, and checkout process.
        </p>
        <ButtonSite text="view project" link="/portfolio/audio" />
      </div>
    </div>
  );
};

export default Entertainment;
