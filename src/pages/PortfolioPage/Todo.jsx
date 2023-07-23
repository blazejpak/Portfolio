import ButtonSite from "../../UI/ButtonSite";
import imgTodo from "../../assets/images/todo_dark.webp";

const Todo = ({ index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`portfolio_box ${isEven ? "portfolio_box--reverse" : ""}`}>
      <img
        src={imgTodo}
        alt="Entertainment app"
        className="portfolio_image--detail"
      />
      <div className="portfolio_info">
        <h2>Todo App</h2>
        <p>
          It is a fully responsive classic Todo App. This app includes a
          dark/light theme toggle and drag & drop reordering.
        </p>
        <ButtonSite text="view project" link="/portfolio/todo" />
      </div>
    </div>
  );
};

export default Todo;
