import { useState } from 'react';
import Commonheader from '../../components/layout/header';
import { json } from 'stream/consumers';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import useGlobalState from '../../services/GlobalState';

type Props = {};
const PaymentProof = (props:Props) => {
//function Form() {
  const [profile] = useGlobalState('profile');
  const [courseobject] = useGlobalState('courseobject');
  
  console.log("dashbaord profile", profile);

  const history = useNavigate();
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [base64, setBase64 ]= useState('');
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
console.log('test props', props);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
    // if (file) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //    reader.onloadend = () => {
    //     console.log(reader, 'fileeeeeeeeeeeeee')
    //    }
    // }
   // handleSubmit(event)
  }
const getData =(e:any)=>{
 // console.log('test', e)
  setBase64(e);
  createSubscription(e)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let abc= reader.result;
        if(reader.result)
        getData(reader.result)
      };
    }

   
  };
function createSubscription(base64:any){
  
  // const formData = new FormData();
  // formData.append('transactionId', text);
  // formData.append("studentID", "stu-123");
  // formData.append("courseID", "scoures-123asa");
  // formData.append("startDate", "10-12-2023");
  // formData.append("endDate", "10-12-2024");
  // formData.append("courseFee", "100");   
  // formData.append('paymentProofDoc', base64);
  //  console.log('xyz', base64)
    // const obj={
    //   paymentRefID: text,
    //   studentID: "stu-123",
    //   courseID: "scoures-123asa",
    //   startDate: "10-12-2023",
    //   endDate: "10-12-2024",
    //   courseFee: 100,
    //   paymentProofDoc: base64
    // }
//     let obj={
//   studentID:"stu-123",
//   courseID: "scoures-123asa",
//   startDate:"10-12-2023",
//   endDate: "10-12-2024",
//   courseFee: 100,
//   paymentRefID: "1234567890",
//   paymentProofDoc: "base64:data"
// }

//   fetch('http://13.233.223.217:2020/api/v1/student_subscriptions/createSubscription', {
//     method: 'POST',
//    // body: formData, 
//     body: JSON.stringify(obj),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
  
    try {
      let obj={
        studentID:profile.id,
        courseID: courseobject.id,
        startDate:"10-12-2023",
        endDate: "10-12-2024",
        courseFee: 100,
        paymentRefID: text,
      //  paymentProofDoc: base64
        paymentProofDoc: 'base64iVBORw0KGgoAAAANSUhEUgAABVYAAAPbCAYAAAC3x9AuAAAAAXNSR0IArs4c6QAAIABJREFUeF7snXtcVHX'
      }
      const response = fetch("http://13.233.223.217:2020/api/v1/student_subscriptions/createSubscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data = response;
      console.log("Form submitted successfully:", data);
      history("/course-success");
  
    } catch (error) {
      console.error("Error submitting login form:", error);
    }
}
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
   


    {/* <form onSubmit={handleSubmit}>
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
    </form> */}
    </div>
  );
}

export default PaymentProof;
