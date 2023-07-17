import ButtonSite from "../../UI/ButtonSite";
import imgDictionary from "../../assets/images/dictionary.webp";

const Dictionary = ({ index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src={imgDictionary}
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Dictionary App</h2>
        <p>
          This project is created with using Dictionary API. I used here Raect
          with TypeScript, Redux to manage states, TailwindCSS for styling and
          Framer Motion for animation. This is a fully responsive website, where
          you can check the meaning of a written word, find synonyms, and hear
          the correct pronunciation.
        </p>
        <ButtonSite text="view project" link="/portfolio/dictionary" />
      </div>
    </div>
  );
};

export default Dictionary;
