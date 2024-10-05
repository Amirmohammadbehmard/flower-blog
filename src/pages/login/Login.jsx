import { useState } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {
    if (userName == "admin" && password == "1234") {
      document.cookie =
        "username=admin; expires=Thu, 19 Dec 2028 12:00:00 UTC; path=/";
      navigate("/panel");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={submitHandler} type="button">
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
