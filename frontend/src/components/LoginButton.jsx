import "../CssFiles/Login.css";
import { BsRocketTakeoff } from "react-icons/bs";

const LoginButton = ({ text }) => {
  console.log(text);
  return (
    <div className="">
      <button className="cssbuttons-io-button font-cM">
        {text}
        <div className="icon">
          <BsRocketTakeoff />
        </div>
      </button>
    </div>
  );
};

export default LoginButton;
