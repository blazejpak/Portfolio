import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

import ButtonExternal from "../../UI/ButtonExternal";
import ButtonNavigatePortfolio from "../../UI/ButtonNavigatePortfolio";
import InterestContact from "../../components/InterestContact";

import todoImg from "../../assets/images/todo_dark.webp";
import todoImgLight from "../../assets/images/todo_light.webp";

const TodoDetail = () => {
  const images = [
    {
      src: todoImg,
      alt: "Image of todo app",
    },
    { src: todoImgLight, alt: "Image of todo app in light mode" },
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
        src={todoImg}
        alt="Image of Todo App Website"
        className="detail-section_images--heading"
      />
      <div className="detail-section_content">
        <div>
          <div className="line"></div>
          <div className="detail-section_subject">
            <div>
              <h2 className="detail-section--heading">Todo App</h2>
              <p>
                This is a fully responsive classic Todo App. This app includes a
                dark/light theme toggle and drag & drop reordering.
              </p>
            </div>
            <div className="detail-section_skills">
              <p className="detail-section_skills--text">React / TailwindCSS</p>
              <div className="detail-section_skills--buttons">
                <ButtonExternal
                  text="LIVE"
                  link="https://todo-app-blazejpak.vercel.app/"
                />
                <ButtonExternal
                  text="GITHUB"
                  link="https://github.com/blazejpak/Todo-app"
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
              This project was created by Front End Mentor in Figma and
              developed by me. I utilized React to implement the app's
              functionalities, and Tailwind CSS for styling. Users have the
              ability to select color themes and filter todos based on their
              states, such as all, active, and completed.
            </p>
          </div>
          <div>
            <h3 className="detail-section--heading">Static Previews</h3>
            <div className="detail-section_images-box">
              <div className="detail-section_images">
                <button className="detail-section_images--button detail-section_images--button-prev">
                  <AiOutlineArrowLeft
                    size={32}
                    onClick={prevSlide}
                    aria-label="left arrow"
                  />
                </button>
                <button className="detail-section_images--button detail-section_images--button-next">
                  <AiOutlineArrowRight
                    size={32}
                    onClick={nextSlide}
                    aria-label="right arrow"
                  />
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
        leftProject="RestCountries"
        rightProject="Entertainment"
        navigateLeft="restcountries"
        navigateRight="entertainment"
      />
      <InterestContact />
    </section>
  );
};

export default TodoDetail;
