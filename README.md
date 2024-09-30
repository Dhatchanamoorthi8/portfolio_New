# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

// InputField.jsx
import React from 'react';

const InputField = ({ label, type, name, value, onChange, options, error }) => {
  const renderInput = () => {
    switch (type) {
      case 'text':
      case 'email':
      case 'password':
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        );
      case 'textarea':
        return (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
          ></textarea>
        );
      case 'radio':
        return options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ));
      case 'checkbox':
        return options.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
              onChange={onChange}
            />
            {option.label}
          </label>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <label>{label}:</label>
      {renderInput()}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default InputField;

//RegistrationForm.jsx
import React, { useState } from 'react';
import InputField from './InputField';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    gender: '',
    interests: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (formData.interests.length === 0) newErrors.interests = 'Select at least one interest';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted Registration Data:', formData);
      alert('Registration Form Submitted Successfully');
      // Clear form and errors after submission
      setFormData({
        name: '',
        email: '',
        password: '',
        bio: '',
        gender: '',
        interests: [],
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <InputField
        label="Bio"
        type="textarea"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <InputField
        label="Gender"
        type="radio"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        options={[
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
        ]}
        error={errors.gender}
      />
      <InputField
        label="Interests"
        type="checkbox"
        name="interests"
        value={formData.interests}
        onChange={handleChange}
        options={[
          { label: 'Coding', value: 'Coding' },
          { label: 'Music', value: 'Music' },
          { label: 'Sports', value: 'Sports' },
        ]}
        error={errors.interests}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

// ContactForm.jsx
import React, { useState } from 'react';
import InputField from './InputField';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactMethod: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.contactMethod) newErrors.contactMethod = 'Select a contact method';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted Contact Data:', formData);
      alert('Contact Form Submitted Successfully');
      // Clear form and errors after submission
      setFormData({
        name: '',
        email: '',
        message: '',
        contactMethod: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <InputField
        label="Preferred Contact Method"
        type="radio"
        name="contactMethod"
        value={formData.contactMethod}
        onChange={handleChange}
        options={[
          { label: 'Email', value: 'Email' },
          { label: 'Phone', value: 'Phone' },
        ]}
        error={errors.contactMethod}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

// App.jsx
import React from 'react';
import RegistrationForm from './RegistrationForm';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <h1>React Forms with Validation</h1>
      <h2>Registration Form</h2>
      <RegistrationForm />
      <h2>Contact Form</h2>
      <ContactForm />
    </div>
  );
};

export default App;

