import { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seePass , setSeePass] = useState(false);

    
  function handleSeeIcon(){
    setSeePass(seePass ? false : true)
  }
  function handleNameInput(event){
    setName(event.target.value)

  }
  function handleEmailInput(event){
    
    setEmail(event.target.value)

 }
  function handlePasswordInput(event){
    setPassword(event.target.value)
  }
  function handleConfirmPassInput(event){
    setConfirmPassword(event.target.value)
  }
  function handleNewUser(){
    if(name === ''){
        alert('Enter Your Name')
    }
    if(name.length > 1 && name.length < 3){
        alert('UserName must be greater that of 3 letter')
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
            pattern="/^.{3,}$/"
            value={name}
            onChange={handleNameInput}
          />
          {name.length < 3 ? <p className="name-error">Name is Invalid</p>:<p className="name-suggest">Name is Valid</p>}
        </div>
        <div className="email-container containers">
          <label htmlFor="email-input">Email :</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            id="email-input"
            className="input-field"
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
            value={email}
            onChange={handleEmailInput}
          />
        </div>
        <div className="password-container containers">
          <label htmlFor="password-input">Password</label>
          <div className="input-div">
            <input
            type={seePass ? "password" :"text"}
            placeholder="Enter password"
            id="password-input"
            className="input-field"
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?:{}|<>]).{8,}$/"
            value={password}
            onChange={handlePasswordInput}
          />
          <button onClick={handleSeeIcon} className="see-pass-btn">{seePass ? <i class="fa fa-eye"></i> : <i class="fa fa-eye-slash"></i>}</button>
          </div>
          
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
        </div>
        <div className="button-container">
          <button className="sign-up-btn" onClick={handleNewUser}>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default FormValidation;
