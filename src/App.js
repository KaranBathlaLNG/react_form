import "./App.css";
import { useEffect, useState } from "react";
import useForm from "./useForm";
// import axios from 'axios';

function App() {


  const callback = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(callback);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            minLength='8'
            placeholder="First Name"
            onChange={handleChange}
          />
          {errors.firstName && <h3>{errors.firstName}</h3>}
          <input
            type="text"
            minLength='8'
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            

          />
          {errors.lastName && <h3>{errors.lastName}</h3>}
          <input type="submit" value="Submit" className="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
