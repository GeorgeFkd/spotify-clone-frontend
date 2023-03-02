import React from "react";
import "./FormInput.css";
function FormInput({ labeltext, placeholder, inputname }) {
  let type;
  if (inputname === "password") {
    type = "password";
  } else {
    type = "text";
  }
  return (
    <div className="forminput">
      <label htmlFor={inputname}>{labeltext}</label>
      <input
        id={inputname}
        name={inputname}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default FormInput;
