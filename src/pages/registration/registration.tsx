//import * as React from 'react';
import './registration.css';
//import logoImage from "../../assets/images/registerlogo.PNG";
//import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


class Register extends React.Component {


  constructor(props:any) {
    super(props);
    const [value, setValue] = React.useState('1');9

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    this.state = {
      form: {
        fullname: "",
        email: "",
        password: "",
      },
      formErrors: {
        fullname: null,
        email: null,
        password:null
      }
    }
  }
  handleChange = (e:[]) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter(x:any => x !== value)
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value
      };
    }
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === "language" ? this.state.form["language"] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value) errorMsg = "Please enter Name.";
        break;
      case "email":
        if (!value) errorMsg = "Please enter Email.";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = "Please enter valid Email.";
        break;
      case "mobile":
        if (!value) errorMsg = "Please enter Mobile.";
        break;
      case "country":
        if (!value) errorMsg = "Please select Country.";
        break;
      case "gender":
        if (!value) errorMsg = "Please select Gender.";
        break;
      case "password":
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = "Please enter Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      case "confirmPassword":
        // refValue is the value of Password field
        if (!value) errorMsg = "Please enter Confirm Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      case "language":
        if (value.length === 0) errorMsg = "Please select Language.";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map(x => {
      let refValue = null;
      if (x === "password" || x === "confirmPassword") {
        refValue = form[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    console.log("Data: ", form);
  };

  const { form, formErrors } = this.state;
  render() {

  return (
    
    <div className="container">
      <p>Registration Page</p>
      <div className="register-photo">
        <div className="form-container">
            <div className="image-holder">
               {/* <img src={logoImage} alt="earth" />  */}
              <h2>Start Learning Now</h2>
            </div>
            <form method="post">
     
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create Accont" value="1" />
            <Tab label="Login" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <h4><strong>Welcome to Global Genius Index(G2I)</strong> </h4>
                <p>Start learning and create your account</p>
        <div className="form-group">
          <input className="form-control" type="text" name="fullname" placeholder="Full name" 
                  value={form.fullname}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                />
                {formErrors.fullname && (
                  <span className="err">{formErrors.fullname}</span>
                )}
          </div>
      <div className="form-group"><input className="form-control" type="Email" name="Email" placeholder="Email" /></div>
      <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>

      <div className="form-group"><button className="btn btn-block" type="submit">Create Account</button></div>
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
};

export default Register;