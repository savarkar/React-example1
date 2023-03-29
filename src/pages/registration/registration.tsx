import './registration.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";

type Props = {};
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Register = (props: Props) => {
  const history = useNavigate();

  const [value, setValue] = React.useState('1');

  const handleChangeTab= (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [values, setFormValues] = React.useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", values);
      history("/register-thankyou");
      setFormValues({
        name: "",
        email: "",
        password: "",
      });
      try {
        const response = await fetch("http://example.com/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        console.log("Form submitted successfully:", data);
        setFormValues({
          name: "",
          email: "",
          password: "",
        });

      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateForm();
  };

  const validateForm = (): boolean => {
    const { name, email, password } = values;
    const errors: FormValues = { name: "", email: "", password: "" };
    let isValid = true;

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };


  return (
    
    <div className="container">
      <p>Registration Page</p>
      <div className="register-photo">
        <div className="form-container">
            <div className="image-holder">
               {/* <img src={logoImage} alt="earth" />  */}
              <h2>Start Learning Now</h2>
            </div>
            <form onSubmit={handleSubmit}>
     
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="Create Accont" value="1" />
            <Tab label="Login" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <h4><strong>Welcome to Global Genius Index(G2I)</strong> </h4>
                <p>Start learning and create your account</p>
        <div className="form-group">
          <input className="form-control" type="text"  placeholder="Full name" 
                 id="name"
                 name="name"
                 value={values.name}
                 onChange={handleChange}
                />
                <p className='text-danger'>{errors.name}</p>
          </div>
      <div className="form-group">
        <input className="form-control" type="email" name="email" placeholder="Email" 
         id="email"
         value={values.email}
         onChange={handleChange}
        />
         <p className='text-danger'>{errors.email}</p>
        </div>
      <div className="form-group">
        <input className="form-control" type="password" name="password" placeholder="Password" 
          id="password"
          value={values.password}
          onChange={handleChange}
        />
         <p className='text-danger'>{errors.password}</p>
        </div>

      <div className="form-group">
        <button className="btn btn-block" type="submit">Create Account</button></div>
      <div className='mt-5 mb-3 well'>
      <p className="text-divider"><span>Or Sign up with</span></p>
        </div>
        <div className="d-flex justify-content-around mt-5">
        <img src="https://img.icons8.com/color/48/null/google-logo.png"/>
            <img src="https://img.icons8.com/ios-filled/50/null/mac-os.png"/>
        </div>

        <div>
        </div>
        </TabPanel>
        <TabPanel value="2">
          <p>LogIn</p>
        </TabPanel>
      </TabContext>
    </Box>
   

    </form>
    </div>
    </div>
    </div>
  );
 };

export default Register;