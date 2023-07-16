import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import dictionaryImg from "../../assets/images/dictionary.webp";
import dictionaryImgLight from "../../assets/images/dictionary_light.webp";
import dictionaryImgDetail from "../../assets/images/dictionary--font.webp";

const DictionaryDetail = () => {
  const images = [
    {
      src: dictionaryImg,
      alt: "Image of Dictionary app",
    },
    { src: dictionaryImgLight, alt: "Image of Dictionary app in light mode" },
    { src: dictionaryImgDetail, alt: "Image of Dictionary app with details" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="detail-section">
      <img
        src={dictionaryImg}
        alt="Image of Dictionary App Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">Dictionary App</h2>
              <p>
                This project is created with using Dictionary API. I used here
                Raect with TypeScript, Redux to manage states, TailwindCSS for
                styling and Framer Motion for animation. This is fully
                responsive website, where you can change the colour themes and
                font selection.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">
                React / TypeScript / Redux / TailwindCSS / Framer Motion
              </p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://dictionary-web-app-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/dictionary-web-app"
                />
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="detail-section_box">
          <div>
            <h3 className="detail-section--heading">Project Background</h3>
            <p>
              This project was designed by Front End Mentor in Figma and
              developed by me. I used React with hooks to manage states or
              effects in components, but I also used Redux to manage states in
              whole application. This project includes data from an external API
              that allows you to check, for example synonyms, meaning, or
              pronunciation.
            </p>
          </div>
          <div>
            <h3 className="detail-section--heading">Static Previews</h3>
            <div className="detail-section_images-box">
              <div className="detail-section_images">
                <button className="detail-section_images--button detail-section_images--button-prev">
                  <AiOutlineArrowLeft size={32} onClick={prevSlide} />
                </button>
                <button className="detail-section_images--button detail-section_images--button-next">
                  <AiOutlineArrowRight size={32} onClick={nextSlide} />
                </button>
                <div
                  aria-label={images[currentIndex].alt}
                  style={{
                    backgroundImage: `url(${images[currentIndex].src})`,
                  }}
                  className="detail-section_images--image"
                ></div>
              </div>
              <div className="detail-section_images--dots">
                {images.map((slide, slideIndex) => (
                  <div
                    role="img"
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`detail-section_images--dots-button ${
                      slideIndex === currentIndex
                        ? "detail-section_images--dots-button_active"
                        : ""
                    }`}
                  >
                    <RxDotFilled size={32} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonNavigatePortfolio
        leftProject="Entertainment"
        rightProject="Planet Facts"
        navigateLeft="entertainment"
        navigateRight="planetfacts"
      />
      <InterestContact />
    </section>
  );
};

export default DictionaryDetail;
