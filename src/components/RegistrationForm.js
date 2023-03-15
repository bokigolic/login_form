import React, { useState } from 'react';
import { database } from '../firebase'
import { ref, push, child, update } from "firebase/database";

function RegistrationForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    console.log(firstName, lastName, email, password, confirmPassword);
    // add code to save user data to database
  }

  return (
    <div className="form">
      <form>
        <div className="username">
          <label className="form__label" htmlFor="firstName">First Name </label>
          <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">Last Name </label>
          <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">Email </label>
          <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">Password </label>
          <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
          <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
        </div>
        <button onClick={(event) => handleSubmit(event)} type="submit" className="btn">Register</button>
      </form>
    </div>

  )
}

export default RegistrationForm
