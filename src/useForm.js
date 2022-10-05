import React, { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    validateForm(value, name);
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const validateForm = (value, name) => {
    switch (name) {
      case "firstName":
        if (value.length < 8) {
          setErrors({
            ...errors,
            [name]: "First Name should not be less than 8",
          });
          console.log(`errors present ${JSON.stringify(errors)}`);
        } else {
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;
      case "lastName":
        if (value.length < 8) {
          setErrors({
            ...errors,
            [name]: "last Name should not be less than 8",
          });
          console.log(`errors present ${JSON.stringify(errors)}`);
        } else {
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert("There is an error in the form. Please try again");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
