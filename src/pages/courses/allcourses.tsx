import React from 'react';
import Commonheader from '../../components/layout/header';
import './allcourses.css'
import dd from '../../assets/images/engineering-supplies-blueprint.png'

function Allcourses() {
  return (
    <div>
      <Commonheader />
      <div className='bg-home'>
      <div className="container h-100 mt-5 p-3">
<div className="d-flex flex-column justify-content-center h-100 ">
  <span style={{width:'40px',height:'40px'}} className='border rounded-circle p-2 text-center'><i className="fa fa-angle-left"></i></span>
    <h2 className='mt-5'>Course Name</h2>
    <p>Course Summary</p>
    <div className='col-md-4'>
      <input type='text' className='form-control w-md-50' placeholder='Search' />
    </div>
  </div>
</div>  </div>
<div className='container mt-5'>
{/* <!-- First Row [Prosucts]--> */}
    <div className='row'>
      <div className="col-md-1 text-theme"><h6>Filter by</h6></div>
      <div className="col-md-1">
      <div className="dropdown">
    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
      Topics
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Link 1</a></li>
      <li><a className="dropdown-item" href="#">Link 2</a></li>
      <li><a className="dropdown-item" href="#">Link 3</a></li>
    </ul>
  </div>


      </div>
      <div className="col-sm-2">
      <div className="dropdown">
    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
      Sory by
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Link 1</a></li>
      <li><a className="dropdown-item" href="#">Link 2</a></li>
      <li><a className="dropdown-item" href="#">Link 3</a></li>
    </ul>
  </div>
      </div>
    </div>
  {/* <h2 className="font-weight-bold mb-2">From the Shop</h2>
  <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}

  <div className="row pb-5 mb-4 mt-5">
    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0">
        <div className="card-body p-0"><img src={dd} alt="" className="img-fluid d-block mx-auto mb-3" />
          <div className='p-3 card-body-inner'>
            <h5> <a href="#" className="text-dark">Topic 1</a></h5>
          <p className="small text-muted font-italic">Teachers Name:</p>
          <div className='row s'>
                <div className="col-md-6">1. Ramesh</div>
                <div className="col-md-6">2. Suresh</div>
                <div className="col-md-6">2. Kuresh</div>
                <div className="col-md-6">2. Naresh</div>
          </div>
          <div className='row flex-nowrap mt-3'>
            <div className="col-md-6 d-flex flex-nowrap">
             <div className='col-md-7'> <p>Local rating: </p></div>
              <ul className="col-md-5 list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul>              
            </div>
            <div className="col-md-6 d-flex flex-nowrap">
             <div className='col-md-7'> <p>Global rating: </p></div>
              <ul className="col-md-5 list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul>              
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="d-flex col-md-9 justify-content-around">
              <span><i className="fa fa-signal text-success"></i> Beginer</span>
              <span>10 Weeks</span>
            </div>

          </div>


          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0">
        <div className="card-body p-0"><img src={dd} alt="" className="img-fluid d-block mx-auto mb-3" />
          <div className='p-3 card-body-inner'>
            <h5> <a href="#" className="text-dark">Topic 1</a></h5>
          <p className="small text-muted font-italic">Teachers Name:</p>
          <div className='row s'>
                <div className="col-md-6">1. Ramesh</div>
                <div className="col-md-6">2. Suresh</div>
                <div className="col-md-6">2. Kuresh</div>
                <div className="col-md-6">2. Naresh</div>
          </div>
          <div className='row flex-nowrap mt-3'>
            <div className="col-md-6 d-flex flex-nowrap">
             <div className='col-md-7'> <p>Local rating: </p></div>
              <ul className="col-md-5 list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul>              
            </div>
            <div className="col-md-6 d-flex flex-nowrap">
             <div className='col-md-7'> <p>Global rating: </p></div>
              <ul className="col-md-5 list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul>              
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="d-flex col-md-9 justify-content-around">
              <span><i className="fa fa-signal text-success"></i> Beginer</span>
              <span>10 Weeks</span>
            </div>

          </div>


          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
      {/* <!-- Card--> */}
      <div className="card rounded shadow-sm border-0">
        <div className="card-body p-0"><img src={dd} alt="" className="img-fluid d-block mx-auto mb-3" />
          <div className='p-3 card-body-inner'>
            <h5> <a href="#" className="text-dark">Topic 1</a></h5>
          <p className="small text-muted font-italic">Teachers Name:</p>
          <div className='row s'>
                <div className="col-md-6">1. Ramesh</div>
                <div className="col-md-6">2. Suresh</div>
                <div className="col-md-6">2. Kuresh</div>
                <div className="col-md-6">2. Naresh</div>
          </div>
          <div className='row flex-nowrap mt-3'>
            <div className="col-md-6 d-flex flex-nowrap">
             <div className='col-md-7'> <p>Local rating: </p></div>
              <ul className="col-md-5 list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul>              
            </div>
            <div className="col-md-6 d-flex flex-nowrap">
             <div className='col-md-7'> <p>Global rating: </p></div>
              <ul className="col-md-5 list-inline small">
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
            <li className="list-inline-item m-0"><i className="fa fa-star-o text-success"></i></li>
          </ul>              
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="d-flex col-md-9 justify-content-around">
              <span><i className="fa fa-signal text-success"></i> Beginer</span>
              <span>10 Weeks</span>
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
export default Allcourses;