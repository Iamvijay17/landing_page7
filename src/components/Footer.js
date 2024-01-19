import React from "react";

export const Footer = () => {
  return (
    <div>
      <div class="container text-center border-top">
        <div class="row mt-3">
          <div class="col-6 col-lg-6">
            <p className="fw-semibold fs-3 text-decoration-underline">Explore</p>
            <div className=" lh-1">
              <p>Who We Are</p>
              <p>Stories in India</p>
              <p>Newsroom</p>
            </div>
          </div>
          <div class="col">
            <p className="fw-semibold fs-3  text-decoration-underline">Connect</p>
            <div className=" lh-1">
              <p>Contact Us</p>
              <p>Careers</p>
            </div>
          </div>
          <div class="col">
            <p className="fw-semibold fs-5">SOCIAL</p>
            <div className="social">
              <a href="" id="contact">
                <i class="fa-brands p-3 fw-semibold fs-2 fa-instagram fa-beat"></i>
              </a>
              <a href="#">
              
                <i class="fa-brands fa-twitter fa-beat p-3 fw-semibold fs-2"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-facebook fa-beat p-3 fw-semibold fs-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
