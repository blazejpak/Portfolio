import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import entertainmentImg from "../../assets/images/entertainment.webp";
import entertainmentImgLogin from "../../assets/images/entertainment--login.webp";
import entertainmentImgLoginError from "../../assets/images/entertainment--login-error.webp";
import entertainmentImgBookmarked from "../../assets/images/entertainment--bookmarked.webp";

const EntertainmentDetail = () => {
  const images = [
    {
      src: entertainmentImgLogin,
      alt: "Image of sign in site",
    },
    { src: entertainmentImgLoginError, alt: "Image of error login " },
    { src: entertainmentImg, alt: "Image of entertainment site" },
    {
      src: entertainmentImgBookmarked,
      alt: "Image of bookmarked movies or series",
    },
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
        src={entertainmentImg}
        alt="Image of Entertainment App Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">Entertainment App</h2>
              <p>
                Fully responsive multi-page Entertainment App where you can sign
                in / sign up, search and bookmark favorite movie / serial.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">
                TAILWINDCSS / REACT / REACT-ROUTER / FIREBASE
              </p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://entertainment-app-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/Entertainment-app"
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
              This project was designed by FrontEnd Mentor in Figma and
              developed by me. I used React with hooks like useContext,
              useEffect, and useState to manage application. For navigation, I
              employed React-Router. Authentication was implemented using
              firebase. To style the app I used TailwindCSS. This project
              contains static data that allows you to search, filter, and
              bookmark series and movies.
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
                  role="img"
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
        leftProject="Todo"
        rightProject="Dictionary"
        navigateLeft="todo"
        navigateRight="dictionary"
      />
      <InterestContact />
    </section>
  );
};

export default EntertainmentDetail;
