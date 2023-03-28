import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  // Validate input and display error messages if entered incorrectly or not at all
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

// Display form sections
  return (
    <div className="container mt-5">
    <h2 className="mb-3">Let's Connect!</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required defaultValue={name} onBlur={handleChange}/>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email" >
          Email
        </label>
        <input className="form-control" type="email" id="email" required defaultValue={email} onBlur={handleChange}/>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required defaultValue={message} onBlur={handleChange} />
      </div>
      <Button className="btn btn-primary contact-button" type="submit" variant="primary">
        Submit
      </Button>
    </form>
  </div>
  );
}


export default Contact;