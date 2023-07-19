import { useNavigate } from "react-router";
import Button from "../UI/Button";

const ErrorPage = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };

  return (
    <div className="error">
      <h1>Something went wrong🛑🛑</h1>
      <p>We apologise for this problem. We will fix that ASAP 😊</p>
      <Button onClick={backHandler} text="Home" />
    </div>
  );
};

export default ErrorPage;
