import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";

const ButtonNavigatePortfolio = ({
  leftProject,
  rightProject,
  navigateLeft,
  navigateRight,
}) => {
  const navigate = useNavigate();

  const navigateLeftHandler = () => {
    navigate(`/portfolio/${navigateLeft}`);
  };

  const navigateRightHandler = () => {
    navigate(`/portfolio/${navigateRight}`);
  };

  return (
    <>
      <div className="lineWidth"></div>
      <div className="navigate-button">
        <div
          className="navigate-button_box navigate-button_box--left"
          onClick={navigateLeftHandler}
        >
          <MdKeyboardArrowLeft size={32} />
          <div className="navigate-button_text navigate-button_text--left">
            <h3 className="navigate-button_text--heading">{leftProject}</h3>
            <p>Previous Project</p>
          </div>
        </div>
        <div className="lineHeight"></div>
        <div
          className="navigate-button_box navigate-button_box--right"
          onClick={navigateRightHandler}
        >
          <MdKeyboardArrowRight size={32} />
          <div className="navigate-button_text navigate-button_text--right">
            <h3 className="navigate-button_text--heading">{rightProject}</h3>
            <p>Next Project</p>
          </div>
        </div>
      </div>
      <div className="lineWidth"></div>
    </>
  );
};

export default ButtonNavigatePortfolio;
