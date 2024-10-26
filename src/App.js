import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      alert('Login Successful');
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.email = 'Field required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>ID emailField</div>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div id="emailError" style={{ color: 'red'}}>
        {formik.errors.email ? formik.errors.email : null}
        </div>
        <div>ID pswField</div>
        <input name="password" type="password" onChange={formik.handleChange}
        value={formik.values.password}/>
        <div id="pswError" style={{ color: 'red' }}>
        {formik.errors.password ? formik.errors.password: null}
        </div>
        <div></div>
        <button type="submit">ID submitBtn</button>
      </form>
    </div>
  );
}

export default App;
