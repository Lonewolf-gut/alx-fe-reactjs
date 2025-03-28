// src/components/RegistrationForm.js
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      {errors.username && <div>{errors.username}</div>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      {errors.email && <div>{errors.email}</div>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      {errors.password && <div>{errors.password}</div>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
