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


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password, confirmPassword);
  }

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">First Name </label>
          <input className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">Last Name </label>
          <input type="text"
            name=""
            id="lastName"
            value={lastName}
            onChange={handleChange}
            className="form__input"
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email"
            className="form__input"
            placeholder="Email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label"
            for="confirmPassword">Confirm Password </label>
          <input className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={confirmPassword}
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" onClick={handleSubmit} class="btn">Register</button>
      </div>
    </div>
  )
}
export default RegistrationForm