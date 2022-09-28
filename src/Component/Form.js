import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import Private from "./Private";
import Other from "./Other";


const Form = () => {
  const [title, setTitle] = useState(0);

  const [formData, setFormData] = useState({
    mail: "",
    name: "",
    password: "",
    city: "",
    mobile: "",
    favourites: "",
    anything: "",
  });

  const handleChange = ((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  });
  const FormTitle = ["Sign Up", "Private", "Other"];

  const PageDisplay = () => {
    switch (title) {
      case 0:
        return <SignUp handleChange={handleChange} formData={formData}/>;

      case 1:
        return <Private handleChange={handleChange} formData={formData}/>;

      default:
        return <Other handleChange={handleChange} formData={formData}/>;
    }
  };

  return (
    <div>
      <div className="Progressbar"></div>

      <div>
        <h1>{FormTitle[title]}</h1>
      </div>

      <div>
        <h3>{PageDisplay()}</h3>
      </div>
      <button
        disabled={title === 0}
        onClick={() => setTitle((curr) => curr - 1)}
      >
        Prev
      </button>

      <button
        onClick={()=>{
          if(title === FormTitle.length-1){
            console.log(formData)
          } else {
            setTitle((curr) => curr + 1)
          }
        }}
      
      >
      {title === FormTitle.length-1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Form;
