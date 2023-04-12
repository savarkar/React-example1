import React, { useState } from 'react';
import Commonheader from '../../components/layout/header';
import { json } from 'stream/consumers';

function Form() {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files  [0]);
    }
    
    console.log(file, setFile, 'fileeeeeeeeeeeeee')
 
    const formData = new FormData();
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
       reader.onloadend = () => {
        let abc = reader.result;
       }
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reader = new FileReader();
    const formData = new FormData();
    formData.append('transactionId', text);
    formData.append("studentID", "stu-123");
    formData.append("courseID", "scoures-123asa");
    formData.append("startDate", "10-12-2023");
    formData.append("endDate", "10-12-2024");
    formData.append("courseFee", "100");   
    formData.append('paymentProofDoc', reader.result as string);
      //};
//   const abc=reader.result as string;
//   console.log(abc, 'll')
//  formData.append('paymentProofDoc', abc);
//    formData.append('paymentProofDoc', reader.result as string)
//  }

    fetch('http://13.233.223.217:2020/student_subscriptions/createSubscription', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
    <Commonheader />
    <hr />
    <div className="container">
    <div className="row justify-content-center">
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
           <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label" >Trasaction Id</label>
                <input type="text" className="form-control" 
                id="text"
                name="text"
                value={text}
                onChange={handleTextChange}
                />
                {/* <p className='text-danger'>{loginErrors.transactionId}</p> */}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Upload Proof</label>
                <input 
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="form-control"
                />
                {/* <p className='text-danger'>{loginErrors.paymentProofDoc}</p> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
              <button type="submit" className="btn btn-primary w-100">Send </button>
                {/* <button type="submit" className="btn btn-dark w-100 fw-bold" >Send</button> */}
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
	  </div>
	  </div>
    </div>
   


    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;
