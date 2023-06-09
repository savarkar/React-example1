import * as React from 'react';
import './registration-thankyou.css';

type Props = {};
interface FormValues {
  email: string;

}
const ForgotPassword = (props: Props) => {
  const [values, setFormValues] = React.useState<FormValues>({
    email: "",
  });
  const [isLoginRevealPwd, setIsLoginRevealPwd] = React.useState(false);
  const [errors, setErrors] = React.useState({
    email: "",
  });
  const validateForm = (): boolean => {
    const {email } = values;
    const errors = {
      email: "",
    };
    let isValid = true;

    if (!email) {
      errors.email = "Email is required";
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
            <p className='pb-4 theme-second-color fw-bolder'>We will send you an email to reset your password </p>
            {/* <p>you should receive a confirmation email soon  </p> */}
            <div className="form-group p-relative">
                      <input className="form-control p-2" name="forgotEmail" placeholder="Email"
                        id="forgotEmail" type={isLoginRevealPwd ? "text" : "email"}
                        value={values.email} onBlur={handleChange} onChange={handleChange}
                      />
                      <button className="btn btn-link viewpswForgot mt-5" type='button' onClick={() => setIsLoginRevealPwd(prevState => !prevState)} >
                        {isLoginRevealPwd ?
                          <i className="fa fa-eye" aria-hidden="true"></i> : <i className="fa fa-eye-slash" aria-hidden="true"></i>
                        } </button>
                      <p className='text-danger mt-2'>{errors.email}</p>
                    </div>
                    <div className="form-group mt-5 pb-5">
                      <button className="btn btn-block btn-primary w-100" type="submit">Send</button></div>
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
