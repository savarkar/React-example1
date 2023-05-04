import React from "react";

const SideNav = ({ isOpen, toggle, menuList, children }) => {
  return (
    <div className="container">
      <div className={`sidebar ${isOpen && "sidebar--open"}`}>
      <div className="d-block mb-1">
          <button onClick={() => toggle()} className="float-end p-3 mb-2">
          <i className="fa fa-times theme-color fa-2x" aria-hidden="true"></i>
          </button>
          </div>
        <nav class="menu mt-4">
          <ul>
             {menuList.map((item, idx) => (
              <li key={idx + '-menu-item'} >
               
                <a href={item.href}> <span className={item.faIcon} ></span> {item.label}</a>
              </li>
            ))} 

            {/* <li><i className="fa fa-home theme-color fa-1x" aria-hidden="true"></i> Home</li>
            <li><i class="fa fa-bars" aria-hidden="true"></i> My Courses</li>
            <li><i className="fa fa-gratipay theme-color fa-1x" aria-hidden="true"></i> Wishlist</li>
            <li><i className="fa fa-money theme-color fa-1x" aria-hidden="true"></i> Purchase history</li>
            <li><i className="fa fa-arrow-circle-o-left theme-color fa-1x" aria-hidden="true"></i> Back To Parents Portal</li>
            <li><span className="fa fa-sign-out theme-color fa-1x" aria-hidden="true"></span> Logout</li> */}
          </ul>
        </nav>
      </div>
      <div class={`content ${isOpen && "content--open"}`}>{children}</div>
    </div>
  );
};

export default SideNav;