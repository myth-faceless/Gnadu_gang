import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <div class="navone">
          <h4> Welcome to Gandu Gang Website</h4>
        </div>
        <div class="navtwo">
          <div class="logo"> Welcome To Gandu Gang </div>
        </div>
        <div class="navthree">
          <div class="menu">
            <a href="#">HOME</a>
            <a href="#">WE OFFER</a>
            <a href="#">SERVICES</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
            <a href="#">GALLERY</a>
          </div>
        </div>
      </nav>
      {/* <section class="h-text">
            <h1>Facamos em oferecer <br> profissionalismo e competencia!</h1>
            <p>The <strong>Faceless Innovation and Technology </strong> adipisicing elit. At tempore saepe maxime voluptatum, laudantium quo vero possimus omnis nihil culpa odit. Tempore, sed sit dicta quas itaque ducimus tenetur blanditiis!</p>
            <br>
            <button>SHOW MORE</button>
         </section> */}
    </header>
  );
}

export default Header;
