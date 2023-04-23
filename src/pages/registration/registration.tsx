import './registration.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";
import logoimage from '../../assets/images/G2I-logo.png';
import PaymentProof from '../courses/payment-proof';
//import { createGlobalState } from 'react-hooks-global-state';
import useGlobalState from '../../services/GlobalState';

type Props = {};
interface FormValues {
  firstName: string;
  email: string;
  password: string;
  lastName: string;
  country: string,
  timeZone: string,
  mobileNumber: string,
  userType: number

}
interface loginForm {
  userName: string,
  loginPassword: string
}
const Register = (props: Props) => {

  const [name, setName] = useGlobalState("name");
  const [isRevealPwd, setIsRevealPwd] = React.useState(false);
  const [isLoginRevealPwd, setIsLoginRevealPwd] = React.useState(false);
  const [profile, setProfile] = useGlobalState("profile");
  console.log('test global state', profile);

  const history = useNavigate();
  const [logindata, setLoginData] = React.useState('');
  const [value, setValue] = React.useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [values, setFormValues] = React.useState<FormValues>({
    firstName: "",
    email: "",
    password: "",
    lastName: "NA",
    country: "IN",
    timeZone: "asia",
    mobileNumber: "",
    userType: 2
  });
  const [loginvalues, setloginFormValues] = React.useState<loginForm>({
    userName: 'pabbu@test.com',
    loginPassword: 'pabbu1234'
  })
  const [errors, setErrors] = React.useState({
    firstName: "",
    email: "",
    password: "",
    lastName: "NA",
    country: "NA",
    timeZone: "NA",
    mobileNumber: '',
    userType: 2
  });
  const [loginErrors, setloginErrors] = React.useState<loginForm>({
    userName: '',
    loginPassword: ''
  });
  const LoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let logindata = {
        email: loginvalues.userName,
        password: loginvalues.loginPassword
      }
      const response = await fetch("http://13.233.223.217:2020/api/v1/students/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      });

      const data = await response.json();
      redirectDashBoard(data);
      setloginFormValues({
        userName: "",
        loginPassword: "",
      });
      parentToChild(data)
    } catch (error) {
      console.error("Error submitting login form:", error);
    }

  }
  const redirectDashBoard = (data: any) => {
    if (validateLoginForm()) {
      console.log("Login is success:", loginvalues);
      setName(data);
      setProfile(data.data);
      console.log("Form submitted successfully:", data);
      history("/dashboard");
      setloginFormValues({
        userName: "",
        loginPassword: "",
      });
    }
  }
  const parentToChild = (data: any) => {
    setLoginData(data);
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", values);
      setFormValues({
        firstName: "",
        email: "",
        password: "",
        lastName: "NA",
        country: "NA",
        timeZone: "NA",
        mobileNumber: "",
        userType: 2
      });
      try {
        const response = await fetch("http://13.233.223.217:2020/api/v1/students/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        console.log("Form submitted successfully:", data);
        setFormValues({
          firstName: "",
          email: "",
          password: "",
          lastName: "NA",
          country: "NA",
          timeZone: "NA",
          mobileNumber: "",
          userType: 2
        });
        if (data.data) {
          history("/register-thankyou");
        }

      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (event: any) => {
    const { name, value, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateForm();
  };
  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setloginFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateLoginForm();
  }
  const validateForm = (): boolean => {
    const { firstName, email, mobileNumber, password } = values;
    const errors = {
      firstName: "",
      email: "",
      password: "",
      lastName: "NA",
      country: "NA",
      timeZone: "NA",
      mobileNumber: '',
      userType: 2
    };
    let isValid = true;

    if (!firstName) {
      errors.firstName = "Name is required";
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
    if (!mobileNumber) {
      errors.mobileNumber = "Mobile Number is required";
      isValid = false;
    } else if (mobileNumber.length < 10) {
      errors.mobileNumber = "Mobile Number must be 10 Numbers long";
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
      {/* <PaymentProof {...parentToChild}/> */}
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
                    <h4 className='py-1 pt-3 fw-medium text-start fs-5 theme-color'><strong>Welcome to Global Genius Index(G2I)</strong> </h4>
                    <p className='text-start'>Start learning and create your account</p>
                    <div className="form-group mt-3">
                      <input className="form-control" type="text" placeholder="Full name"
                        id="firstName"
                        name="firstName"
                        value={values.firstName} onBlur={handleChange} onChange={handleChange}
                      />
                      <p className='text-danger'>{errors.firstName}</p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="email" name="email" placeholder="Email"
                        id="email"
                        value={values.email} onBlur={handleChange} onChange={handleChange}
                      />
                      <p className='text-danger'>{errors.email}</p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" name="mobileNumber" placeholder="Mobile Number"
                        id="mobileNumber"
                        value={values.mobileNumber} onBlur={handleChange} onChange={handleChange}
                      />
                      <p className='text-danger'>{errors.mobileNumber}</p>
                    </div>
                    <div className="form-group p-relative">
                      <input className="form-control " name="password" placeholder="Password"
                        id="password" type={isRevealPwd ? "text" : "password"}
                        value={values.password} onBlur={handleChange} onChange={handleChange}
                      />

                      <button className="btn btn-link viewpsw" onClick={() => setIsRevealPwd(prevState => !prevState)} >
                        {isRevealPwd ?
                          <i className="fa fa-eye" aria-hidden="true"></i> : <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        } </button>

                      {/* <a href="#"  onClick={() => {
            setShowPin(!showPin);
          }}></a> 
          {showPin ? 'Skjul' : 'Vis'}{' '} <i className="fa fa-eye" aria-hidden="true"></i> */}
                      <p className='text-danger'>{errors.password}</p>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-block" type="submit">Create Account</button>
                    </div>
                    <div className='mt-5 mb-3 well'>
                      <p className="text-divider"><span>Or Sign up with</span></p>
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                      <img src="https://img.icons8.com/color/48/null/google-logo.png" />
                      <img src="https://img.icons8.com/ios-filled/50/null/mac-os.png" />
                    </div>

                    <div>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value="2">
                  <h2 className='py-4 fw-medium text-start fs-5 theme-color'>Welcome Back</h2>
                  <form onSubmit={LoginSubmit}>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Email"
                        id="userName"
                        name="userName"
                        value={loginvalues.userName}
                        onChange={handleLoginChange}
                      />
                      <p className='text-danger'>{loginErrors.userName}</p>
                    </div>
                    <div className="form-group d-none">
                      <input className="form-control" type="loginPassword" name="loginPassword" placeholder="Password"
                        id="loginPassword"
                        value={loginvalues.loginPassword}
                        onChange={handleLoginChange}
                      />
                      <p className='text-danger'>{loginErrors.loginPassword}</p>
                    </div>
                    <div className="form-group p-relative">
                      <input className="form-control " name="loginPassword" placeholder="Password"
                        id="loginPassword" type={isLoginRevealPwd ? "text" : "password"}
                        value={loginvalues.loginPassword} onBlur={handleChange} onChange={handleChange}
                      />

                      <button className="btn btn-link viewpsw" type='button' onClick={() => setIsLoginRevealPwd(prevState => !prevState)} >
                        {isLoginRevealPwd ?
                          <i className="fa fa-eye" aria-hidden="true"></i> : <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        } </button>
                      <p className='text-danger'>{loginErrors.loginPassword}</p>
                      <p className=' fw-medium text-start fs-6'>
                        <small>
                       <a className='theme-color text-decoration-none' href="/forgot-password"> Forgot Password</a> </small></p>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-block" type="submit">Login</button>
                    </div>
                    <div className='mt-5 mb-3 well'>
                      <p className="text-divider"><span>Or Sign up with</span></p>
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                      <img src="https://img.icons8.com/color/48/null/google-logo.png" />
                      <img src="https://img.icons8.com/ios-filled/50/null/mac-os.png" />
                    </div>
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