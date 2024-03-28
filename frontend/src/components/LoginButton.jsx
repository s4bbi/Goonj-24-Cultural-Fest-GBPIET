import "../CssFiles/Login.css"
import { BsRocketTakeoff } from "react-icons/bs";

const LoginButton = () => {
    return (
        <div className="">
            <button className="cssbuttons-io-button font-cM">
            LOGIN
            <div className="icon">
                <BsRocketTakeoff />
            </div>
            </button>
        </div>
    )
}

export default LoginButton;