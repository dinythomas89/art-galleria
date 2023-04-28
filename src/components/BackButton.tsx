import { useNavigate } from "react-router-dom";
import { BackButtonComponent } from "../styles/backButton";

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <BackButtonComponent onClick={() => navigate(-1)}>⬅</BackButtonComponent>
  );
};

export default BackButton;
