import { useState } from 'react';
import axios from 'axios';

import { BaseButton, BaseInput, BaseLabel } from '../index';
import './styles.css';

const defaultFormData = { firstName: '', lastName: '', emailAddress: '' };

const Form = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const { firstName, lastName, emailAddress } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    // const res = await axios.post('/mock-url', ...formData);
    // console.log(res.data);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <BaseLabel htmlFor="firstName">First Name</BaseLabel>
      <BaseInput
        id="firstName"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      <BaseLabel htmlFor="lastName">Last Name</BaseLabel>
      <BaseInput
        id="lastName"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <BaseLabel htmlFor="emailAddress">Email</BaseLabel>
      <BaseInput
        id="emailAddress"
        type="emailAddress"
        name="emailAddress"
        value={emailAddress}
        onChange={handleChange}
      />
      <BaseButton>Submit</BaseButton>
    </form>
  );
};

export default Form;
