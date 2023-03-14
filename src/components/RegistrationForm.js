import React, { useState } from 'react';

const RegistrationForm = () => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null)


  const handleChange = (e) => {
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


  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">First Name </label>
          <input className="form__input" onChange={handleChange} type="text" id="firstName" placeholder="First Name" />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">Last Name </label>
          <input type="text" name="" id="lastName" onChange={handleChange} className="form__input" placeholder="LastName" />
        </div>
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email" id="email" className="form__input" placeholder="Email" />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" onChange={handleChange} type="password" id="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">Confirm Password </label>
          <input className="form__input" onChange={handleChange} type="password" id="confirmPassword" placeholder="Confirm Password" />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">Register</button>
      </div>
    </div>
  )
}
export default RegistrationForm