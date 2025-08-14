import { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");
  const [seePass, setSeePass] = useState(false);

  function handleSeeIcon() {
    setSeePass(seePass ? false : true);
  }

  function handleNameInput(event) {
    const inputName = event.target.value;
    console.log(inputName)
    setName(inputName);
    if(inputName.trim() === ''){
      setErrorName('Enter your name')
    }
    else if(inputName.trim().length < 3){
        setErrorName('Name must be at least of three letter')
    }
    else{
      setErrorName('');
    }
  }
  function handleEmailInput(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    if(inputEmail.trim() === ''){
      setEmailError('Email is required');
    }
    else if(!/^\S+@\S+\.\S+$/.test(email)){
      setEmailError('Enter the valid email')
    }
    else{
      setEmailError('');
    }

  }
  function handlePasswordInput(event) {
    const passInput = event.target.value;
    setPassword(passInput);
    if(passInput.trim() === ''){
      setErrorPass('Password is required ')
    }
    else if(passInput.length !== 8){
      setErrorPass('Password must be of 8 character')
    }
    else{
      setErrorPass('');
    }
  }
  function handleConfirmPassInput(event) {
    const inputConfirmPass = event.target.value;
    setConfirmPassword(inputConfirmPass);

    if(inputConfirmPass.trim()===''){
      setErrorConfirmPass('confirm password is required')
    }
    else if(inputConfirmPass !== password){
      setErrorConfirmPass('Pasword must be same ')
    }
    else{
      setErrorConfirmPass('')
    }

  }
  function handleNewUser() {
    if (name === "") {
      alert("Enter Your Name");
    }
    if (name.length > 1 && name.length < 3) {
      alert("UserName must be greater that of 3 letter");
    }
  }

  return (
    <>
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
            value={name}
            onChange={handleNameInput}
          />
          { errorName && <p className="name-error error">{errorName}</p>}
        </div>
        <div className="email-container containers">
          <label htmlFor="email-input">Email :</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            id="email-input"
            className="input-field"
            value={email}
            onChange={handleEmailInput}
          />
          {emailError && <p className = "email-error error">{emailError}</p>}
        </div>
        <div className="password-container containers">
          <label htmlFor="password-input">Password</label>
          <div className="input-div">
            <input
              type={seePass ? "password" : "text"}
              placeholder="Enter password"
              id="password-input"
              className="input-field"
              pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$/"
              value={password}
              onChange={handlePasswordInput}
            />
            <button onClick={handleSeeIcon} className="see-pass-btn">
              {seePass ? (
                <i class="fa fa-eye"></i>
              ) : (
                <i class="fa fa-eye-slash"></i>
              )}
            </button>
          </div>
           {errorPass && <p className="pass-error error">{errorPass}</p>}
        </div>
        <div className="confirm-password-container containers">
          <label htmlFor="confirm-password-input">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter password"
            id="confirm-password-input"
            className="input-field"
            value={confirmPassword}
            onChange={handleConfirmPassInput}
          />
          {errorConfirmPass && <p className="pass-error error">{errorConfirmPass}</p>}
        </div>
        <div className="button-container">
          <button className="sign-up-btn" onClick={handleNewUser}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default FormValidation;
