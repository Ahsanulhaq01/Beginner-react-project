import { useState } from "react";

function FormValidation() {
  const [seePass, setSeePass] = useState(true);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("data")) || {}
  );
  const [error, setError] = useState({});

  function handleSeeIcon() {
    setSeePass(seePass ? false : true);
  }

  function handleNameInput(event) {
    const inputName = event.target.value;
    setFormData((preData) => ({
      ...preData,
      name: inputName,
    }));

    // setFormData({ name: inputName });//
    if (inputName.trim() === "") {
      setError({ name: "name is required" });
      event.target.style.border = "2px solid red";
    } else if (inputName.trim().length < 3) {
      setError({ name: "Name must be at least of three letter" });
      event.target.style.border = "2px solid red";
    } else {
      setError({ name: "" });
      event.target.style.border = "2px solid green";
    }
  }
  function handleEmailInput(event) {
    const inputEmail = event.target.value;
    setFormData((preData) => ({
      ...preData,
      email: inputEmail,
    }));
    if (inputEmail.trim() === "") {
      setError({ email: "Email is required" });
      event.target.style.border = "2px solid red";
    } else if (!/^\S+@\S+\.\S+$/.test(inputEmail)) {
      setError({ email: "Enter the valid email" });
      event.target.style.border = "2px solid red";
    } else {
      setError({ email: "" });
      event.target.style.border = "2px solid green";
    }
  }
  function handlePasswordInput(event) {
    const passInput = event.target.value;
    setFormData((preData) => ({
      ...preData,
      pass: passInput,
    }));
    if (passInput.trim() === "") {
      setError({ pass: "Password is required " });
      event.target.style.border = "2px solid red";
    } else if (passInput.length < 8) {
      setError({ pass: "Password must be of 8 character" });
      event.target.style.border = "2px solid red";
    } else {
      setError({ pass: "" });
      event.target.style.border = "2px solid green";
    }
  }
  function handleConfirmPassInput(event) {
    const inputConfirmPass = event.target.value;
    setFormData((preData) => ({
      ...preData,
      confirmPass: inputConfirmPass,
    }));

    if (inputConfirmPass.trim() === "") {
      setError({ confirmPass: "confirm password is required" });
      event.target.style.border = "2px solid red";
    } else if (inputConfirmPass !== formData.pass) {
      setError({ confirmPass: "Pasword must be same " });
      event.target.style.border = "2px solid red";
    } else {
      setError({ confirmPass: "" });
      event.target.style.border = "2px solid green";
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("data", JSON.stringify(formData));
    alert("form successfully submitted");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="app-container">
          <h1 className="heading">Sign Up</h1>
          <div className="name-container containers">
            <label htmlFor="name-input">Name :</label>
            <input
              type="text"
              placeholder="Enter your name "
              id="name-input"
              required
              className="input-field"
              onChange={handleNameInput}
            />
            {error.name && <p className="name-error error">{error.name}</p>}
          </div>
          <div className="email-container containers">
            <label htmlFor="email-input">Email :</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              id="email-input"
              className="input-field"
              onChange={handleEmailInput}
            />
            {error.email && <p className="email-error error">{error.email}</p>}
          </div>
          <div className="password-container containers">
            <label htmlFor="password-input">Password</label>
            <div className="input-div">
              <input
                type={seePass ? "password" : "text"}
                placeholder="Enter password"
                id="password-input"
                className="input-field"
                onChange={handlePasswordInput}
              />
              <button
                onClick={handleSeeIcon}
                className="see-pass-btn"
                type="button"
              >
                {seePass ? (
                  <i className="fa fa-eye"></i>
                ) : (
                  <i className="fa fa-eye-slash"></i>
                )}
              </button>
            </div>
            {error.pass && <p className="pass-error error">{error.pass}</p>}
          </div>
          <div className="confirm-password-container containers">
            <label htmlFor="confirm-password-input">Confirm Password</label>
            <input
              type={seePass ? "password" : "text"}
              placeholder="Enter password"
              id="confirm-password-input"
              className="input-field"
              onChange={handleConfirmPassInput}
            />
            {error.confirmPass && (
              <p className="pass-error error">{error.confirmPass}</p>
            )}
          </div>
          <div className="button-container">
            <button
              className="sign-up-btn"
              type="submit"
              disabled={
                !!(error.name || error.email || error.pass || error.confirmPass)
              }
              // disabled={Object.values(error).some((err) => err !== "")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormValidation;
