import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { registerUser, loginUser } from "../../Firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [signState, setsignState] = useState("Sign-Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${signState} Form Submitted`, formData);

    if (signState === "Sign-Up") {
      const res = await registerUser(
        formData.email,
        formData.password,
        formData.name
      );
      if (res.error) {
        alert("❌ " + res.error);
      } else {
        alert("✅ Signup successful!");
        navigate("/");
      }
    } else {
      const res = await loginUser(formData.email, formData.password);
      if (res.error) {
        alert("❌ " + res.error);
      } else {
        alert("✅ Login successful!");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>{signState}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {signState === "Sign-Up" && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">{signState}</button>
        </form>

        <p className="login-help">
          Need help? <a href="#">Click here</a>
        </p>

        <p className="login-signup">
          {signState === "Sign-Up"
            ? "Already have an account?"
            : "New to Netflix?"}{" "}
          <a
            href="#"
            onClick={() =>
              setsignState(signState === "Sign-Up" ? "Login" : "Sign-Up")
            }
          >
            {signState === "Sign-Up" ? "Login here" : "Sign up now"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

// 1705951584e17c628fcccd3e3500e7e0
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzA1OTUxNTg0ZTE3YzYyOGZjY2NkM2UzNTAwZTdlMCIsIm5iZiI6MTc0OTA1NzU5MC4yNjU5OTk4LCJzdWIiOiI2ODQwODAzNjJjYjdhOTRkY2ZmY2I2MDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ByPf-CrBmeWUusobulgwM3IuCCddiW0gMIS1xUQVTEA
