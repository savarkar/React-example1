import { Component } from 'react';
import './header.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {};

function Commonheader(){
    return (
        <React.Fragment>
      <div>
        <div className="header_main">
<div className="container">
    <div className='row'>

    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand me-auto" href="#">Global Genius Index
(G2I)
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex me-auto ms-md-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <ul className="navbar-nav mb-2 mb-lg-0 ms-md-auto nav-fill">
        <li className="nav-item">
        <Link className='nav-link' to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Student</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-sm mt-1 btn-primary">
            My Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
          <i className="fa fa-globe" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    <div className="row d-none">

        <div className="col-lg-4 col-sm-3 col-3 order-1">
            <div className="logo_container">
                <div className="logo"><h4><a href="#">Global Genius Index
(G2I)</a></h4></div>
            </div>
        </div>

        <div className="col-lg-3 col-12 order-lg-2 order-3 text-lg-left text-right">
            <div className="header_search">
                <div className="header_search_content">
                    <div className="header_search_form_container">
                        <form action="#" className="header_search_form clearfix">
                            <input type="search" required className="header_search_input" placeholder="Search" />
{/*                             
                            <button type="submit" className="header_search_button trans_300" value="Submit">
                            <img src="https://img.icons8.com/ios/50/1A1A1A/search--v3.png"/>
                            </button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
        </div>
    </div>
</div>
</div>
      </div>
      </React.Fragment>
    )
}
    export default Commonheader;






