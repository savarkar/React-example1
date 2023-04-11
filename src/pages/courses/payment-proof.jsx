import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import Commonheader from '../../components/layout/header';
import './allcourses.css'
import { Link } from 'react-router-dom';

export default function PaymentProof() {
  const [money, setMoney] = useState();
  return (
    <div>
    <Commonheader />
    <hr />
    <div className="container">
    <div class="row justify-content-center">
    <div className="col-lg-6">
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="h6 mb-4">Payment Details</h3>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Trasaction Id</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Upload Proof</label>
                <input type="file" className="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
              <Link className="btn btn-primary w-100" to="/register-thankyou">Send  </Link>
                {/* <button type="submit" class="btn btn-dark w-100 fw-bold" >Send</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
	  </div>
	  </div>
    </div>
    </div>
  )
}
