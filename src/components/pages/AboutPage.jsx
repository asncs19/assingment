import React, { useEffect } from 'react';
import gsap from "gsap";
import { Button } from '@mui/material';



function AboutPage() {
  useEffect(() => {
    const divs = document.querySelectorAll(".testimonials")
    gsap.set(divs[1], { x: 100, opacity: 1 });
    gsap
      .timeline({ repeat: -1, defaults: { duration: 3 } })

      .add("one")
      .to(divs[0], { y: 600, x: 0, opacity: 0.05 }, "one")
      .to(divs[1], { y: -350, x: 0, opacity: 0.05 }, "one")
      .to(divs[2], { y: -450, x: 0, opacity: 0.05 }, "one")
      .to(divs[3], { y: -450, x: 0, opacity: 0.05 }, "one")
      .to(divs[4], { y: -450, x: 100, opacity: 1 }, "one")


      .add("two")
      .to(divs[0], { y: 300, x: 100, opacity: 1 }, "two")
      .to(divs[1], { y: 350, x: 0, opacity: 0.05 }, "two")
      .to(divs[2], { y: -600, x: 0, opacity: 0.05 }, "two")
      .to(divs[3], { y: -450, x: 0, opacity: 0.05 }, "two")
      .to(divs[4], { y: -450, x: 0, opacity: 0.05 }, "two")

      .add("three")
      .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(divs[1], { y: 0, x: 100, opacity: 1 }, "three")
      .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(divs[3], { y: -450, x: 0, opacity: 0.05 }, "three")
      .to(divs[4], { y: -450, x: 0, opacity: 0.05 }, "three")

      .add("four")
      .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "four")
      .to(divs[1], { y: 0, x: 0, opacity: 0.05 }, "four")
      .to(divs[2], { y: 0, x: 100, opacity: 1 }, "four")
      .to(divs[3], { y: -450, x: 0, opacity: 0.05 }, "four")
      .to(divs[4], { y: -450, x: 0, opacity: 0.05 }, "four")

      .add("five")
      .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "five")
      .to(divs[1], { y: 0, x: 0, opacity: 0.05 }, "five")
      .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "five")
      .to(divs[3], { y: 0, x: 100, opacity: 1 }, "five")
      .to(divs[4], { y: 0, x: 0, opacity: 0.05 }, "five")


  },)
  return (
    
    <div className="content">
      <h1>About us</h1>
      
      <div>
      <div className="testimonials">
        <div className="container">
          <div>
            <img
              src="/a.png" className="person" alt="" />
          </div>

          <div className="text">
            <h2> Person A</h2>
            <h3> developer</h3>
            <p>
              profile info
            </p>


          </div>
        </div>
      </div>

      <div className="testimonials">

        <div className="container">
          <div>
            <img
              src="/a.png" className="person" alt="" />
          </div>

          <div className="text">
            <h2> person B</h2>
            <h3> role</h3>
            <p>
              profile info
            </p>


          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <div>
            <img
              src="/a.png" className="person" alt="" />
          </div>

          <div className="text">
            <h2> person C</h2>
            <h3> role</h3>
            <p>
              profile info
            </p>


          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <div>
            <img
              src="/a.png" className="person" alt="" />
          </div>

          <div className="text">
            <h2> person D</h2>
            <h3> role</h3>
            <p>
              profile info
            </p>


          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <div>
            <img
              src="/a.png" className="person" alt="" />
          </div>

          <div className="text">
            <h2> person E</h2>
            <h3> role</h3>
            <p>
              profile info
            </p>


          </div>

        </div>
        

      </div>

      </div>

      <div>
          <Button>Click</Button>
        </div>

    </div>
  );
};

export default AboutPage