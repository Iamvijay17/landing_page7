import React from "react";
import "./style.css";

export const Sectionone = () => {
  return (
    <div class="container text-center my-5">
      <div class="row my-5">
        <div class="col SectiononeTitle" data-aos="fade-up-right">
          <p className="fw-semibold fs-1"  >Our Priorities</p>
          <p>
            We are supporting national conservation priorities by applying our
            expertise in science and global experience, as well as our ability
            to take initiatives to scale and collaborate.
          </p>
          <button class="btn shadow-lg text-white btn-lg fw-semibold">
            READ MORE
          </button>
        </div>
        <div class="col">
          <img
            className="SectiononeImg" data-aos="fade-up-left"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/india/69026905.jpg?crop=192%2C0%2C1214%2C911&wid=820&hei=615&scl=1.48130081300813"
            alt=""
          />
        </div>
      </div>
      <div class="row my-5">
        <div class="col">
          <img
            className="SectiononeImg" data-aos="fade-down-right"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/r/e/RestoringriverGanga.jpg?crop=220%2C0%2C3558%2C2669&wid=820&hei=615&scl=4.339837398373984"
            alt=""
          />
        </div>
        <div class="col SectiononeTitle" data-aos="fade-up-left">
          <p className="fw-semibold fs-1">Meet Our Team</p>
          <p>
            We come from diverse backgrounds and have varied skills and
            expertise, but are united by our common love for nature.
          </p>
          <button class="btn shadow-lg fw-semibold text-white btn-lg">
            OUR PEOPLE
          </button>
        </div>
      </div>
      <div class="row my-5">
        <div class="col SectiononeTitle" data-aos="fade-up-right">
          <p className="fw-semibold fs-1">How We Work</p>
          <p>
            We support national priorities, collaborate with diverse
            stakeholders, focus on results and impact, and lead with science to
            achieve conservation success.
          </p>
          <button class="btn shadow-lg btn-lg fw-semibold text-white">
            LEARN MORE
          </button>
        </div>
        <div class="col">
          <img data-aos="fade-up-left"
            className="SectiononeImg"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/india/28753070.jpg?crop=0%2C21%2C1543%2C1157&wid=820&hei=615&scl=1.8817073170731706"
            alt=""
          />
        </div>
      </div>
      <div class="row my-5 ">
        <div class="col">
          <img
            className="SectiononeImg" data-aos="fade-down-right"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/india/69026905.jpg?crop=192%2C0%2C1214%2C911&wid=820&hei=615&scl=1.48130081300813"
            alt=""
          />
        </div>
        <div class="col SectiononeTitle" data-aos="fade-up-left">
          <p className="fw-semibold fs-1">Our Priorities</p>
          <p>
            We are supporting national conservation priorities by applying our
            expertise in science and global experience, as well as our ability
            to take initiatives to scale and collaborate.
          </p>
          <button class="btn shadow-lg text-white btn-lg fw-semibold">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};
