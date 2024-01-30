import './Register.css'

import { useState } from 'react';
import axios  from 'axios';

interface Props{
  changePage: (index: number) => void;
}

const RegistrationForm = ({changePage}:Props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    creditCardNumber: '',
    dob: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Sending a POST request to the /register endpoint
      const response = await axios.post('/register', formData);
      console.log('Registration Successful:', response.data);
      changePage(0); 
    } catch (error: any) {
      console.error('Registration Failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='register'>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Credit Card Number:
        <input
          type="text"
          name="creditCardNumber"
          value={formData.creditCardNumber}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Register</button>
    </form>  );
};

export default RegistrationForm;
