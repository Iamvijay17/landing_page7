import React from "react";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <nav class="navbar navbar-expand-lg fw-semibold">
        <div class="container-fluid">
          <a class="navbar-brand" data-aos="fade-right" href="#" style={{color:"#007ddd"}}>
          <img src="https://picsxtra.com/images/2024/01/19/pngwing.com.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/>
          NATURE WEB
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
