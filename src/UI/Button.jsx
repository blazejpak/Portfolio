import downArrows from "../assets/icons/down-arrows.svg";

const Button = ({ onClick, text }) => {
  return (
    <div onClick={onClick} className="button">
      <div className="button_arrow">
        <img src={downArrows} alt="Down Arrow" width={16} height={14} />
      </div>
      <div className="button_text">
        <p className="button_text--style">{text}</p>
      </div>
    </div>
  );
};

export default Button;
