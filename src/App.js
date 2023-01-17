import React from "react";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  let noErrors = true;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      if (noErrors) alert ("Login Successful");
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      let validRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

      if (!values.email.match(validRegex)) {
        errors.email= 'Username should be an email';
        noErrors = false;
      }
      if(!values.email) {
        errors.email = 'Field required';
        noErrors = false;
      }
      if(!values.password) {
        errors.password = 'Field required';
        noErrors = false;
      }
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}} id="emailError">{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" name="password" id= "pswField" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div style={{color:'red'}} id="pswError">{formik.errors.password}</div> : null}                
        <button type="submit" id="submitBtn">Submit</button>
      </form>      
    </div>
  );
}

export default App;
