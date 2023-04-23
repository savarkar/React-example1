import * as React from 'react';
import './registration-thankyou.css';

type Props = {};
interface FormValues {
  password: string;

}
const ForgotPassword = (props: Props) => {
  const [values, setFormValues] = React.useState<FormValues>({
    password: "",
  });
  const [isLoginRevealPwd, setIsLoginRevealPwd] = React.useState(false);
  const [errors, setErrors] = React.useState({
    password: "",
  });
  const validateForm = (): boolean => {
    const {password } = values;
    const errors = {
      password: "",
    };
    let isValid = true;

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

  const handleChange = (event: any) => {
    const { name, value, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    validateForm();
  };
    return (
        <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2 p-5">
            <h2 className='pb-2 theme-color fw-bolder'>Reset your Password</h2>
            <p className='pb-4 theme-second-color fw-bolder'>The password must contain at least contains 8 charcters  </p>
            {/* <p>you should receive a confirmation email soon  </p> */}
            <div className="form-group p-relative">
                      <input className="form-control p-2" name="loginPassword" placeholder="Password"
                        id="loginPassword" type={isLoginRevealPwd ? "text" : "password"}
                        value={values.password} onBlur={handleChange} onChange={handleChange}
                      />
                      <button className="btn btn-link viewpswForgot mt-5" type='button' onClick={() => setIsLoginRevealPwd(prevState => !prevState)} >
                        {isLoginRevealPwd ?
                          <i className="fa fa-eye" aria-hidden="true"></i> : <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        } </button>
                      <p className='text-danger mt-2'>{errors.password}</p>
                    </div>
                    <div className="form-group mt-5 pb-5">
                      <button className="btn btn-block btn-primary w-100" type="submit">Reset Password</button></div>
          </div>
          {/* <div className="footer-like">
            <p>Email not received?
             <a href="#">Click here to send again</a>
            </p>
          </div> */}
      </div>
      </div>
      
      
        )
}
export default ForgotPassword;
