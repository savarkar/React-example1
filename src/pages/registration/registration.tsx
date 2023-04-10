import './registration.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";
import logoimage from '../../assets/images/G2I-logo.png';

type Props = {};
interface FormValues {
  name: string;
  email: string;
  password: string;
}
interface loginForm{
  userName: string,
  loginPassword: string
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
  const [loginvalues, setloginFormValues] = React.useState<loginForm>({
    userName: 'testid',
    loginPassword: '123456'
  })
  const [errors, setErrors] = React.useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const [loginErrors, setloginErrors] = React.useState<loginForm>({
    userName: '',
    loginPassword: ''
  });
  const LoginSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      if (validateLoginForm()) {
        console.log("Login is success:", loginvalues);
        history("/dashboard/student");
        setloginFormValues({
        userName: "",
        loginPassword: "",
      });
      }
      // try {
      //   const response = await fetch("http://example.com/api/submit-form", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(loginvalues),
      //   });

      //   const data = await response.json();
      //   console.log("Form submitted successfully:", data);
      //   setloginFormValues({
      //     userName: "",
      //     loginPassword: "",
      //   });

      // } catch (error) {
      //   console.error("Error submitting login form:", error);
      // }

  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", values);
      history("/test");
      setFormValues({
        name: "",
        email: "",
        password: "",
      });
      // try {
      //   const response = await fetch("http://example.com/api/submit-form", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(values),
      //   });

      //   const data = await response.json();
      //   console.log("Form submitted successfully:", data);
      //   setFormValues({
      //     name: "",
      //     email: "",
      //     password: "",
      //   });

      // } catch (error) {
      //   console.error("Error submitting form:", error);
      // }
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
  const handleLoginChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setloginFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateLoginForm();
  }
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
  const validateLoginForm = (): boolean => {
    const { userName, loginPassword } = loginvalues;
    const loginErrors: loginForm = { userName: "", loginPassword: "" };
    let isValid = true;

    if (!userName) {
      loginErrors.userName = "Username is required";
      isValid = false;
    }

    if (!loginPassword) {
      loginErrors.loginPassword = "Password is required";
      isValid = false;
    } else if (loginPassword.length < 6) {
      loginErrors.loginPassword = "Password must be at least 6 characters long";
      isValid = false;
    }

    setloginErrors(loginErrors);
    return isValid;
  };


  return (
    
    <div className="container">
      <div className="register-photo">
        <div className="form-container row d-flex justify-content-center mx-auto">
            <div className="image-holder col-md-6">
                <img src={logoimage} alt="earth" />  
              <h2>Start Learning Now</h2>
            </div>
            <div className='right-section col-md-6'>
     
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="Create Accont" value="1" />
            <Tab label="Login" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          
        <form onSubmit={handleSubmit}>
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
        </form>
        </TabPanel>
        <TabPanel value="2">
          <p>LogIn</p>
          <form onSubmit={LoginSubmit}>
          <div className="form-group">
          <input className="form-control" type="text"  placeholder="User Name" 
                 id="userName"
                 name="userName"
                 value={loginvalues.userName}
                 onChange={handleLoginChange}
                />
                <p className='text-danger'>{loginErrors.userName}</p>
          </div>
      <div className="form-group">
        <input className="form-control" type="loginPassword" name="loginPassword" placeholder="Password" 
         id="loginPassword"
         value={loginvalues.loginPassword}
         onChange={handleLoginChange}
        />
         <p className='text-danger'>{loginErrors.loginPassword}</p>
        </div>
        <div className="form-group">
        <button className="btn btn-block" type="submit">Login</button></div>
          </form>
        </TabPanel>
      </TabContext>
    </Box>
   
    </div>
    </div>
    </div>
    </div>
  );
 };

export default Register;