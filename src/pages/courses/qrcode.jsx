import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import Commonheader from '../../components/layout/header';
import './allcourses.css'

export default function Qrcodes() {
  const [money, setMoney] = useState();
  return (
    <div>
    <Commonheader />
    <hr />
    <div className='container'>
      <div  className='row mt-5'>
        <p className='display-3'>Scan QR code to Buy the course </p>
        <p>Clieck hear to know more details.</p>
      </div>
    <div>
      {/* <input
        type="number"
        onChange={(e) => setMoney(e.target.value)}
        placeholder="Enter the amout"
      /> */}
      <br />
      <QRCode
        value={`upi://pay?pa=intellemo@icici&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`}
        size="300"
        logoImage="https://i.postimg.cc/5tdHfkxF/118852864-1241633666213183-4722008391193475906-n.png"
        logoWidth="80"
        logoHeight="100"
        logoOpacity="0.6"
      />
      <p>Scan the code using PhonePe, Google Pay or Paytm</p>
    </div>
    </div>
    </div>
  );
}
