import * as React from 'react';
import './registration-thankyou.css';

type Props = {};
const Thankyou = (props: Props) => {

    return (
        <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for Registration to our news letter.  </p>
            <p>you should receive a confirmation email soon  </p>
            <a href='/' className="btn go-home">
            go Login
            </a>
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
export default Thankyou;
