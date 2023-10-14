import React from "react";
import Navigation from "./Navigation";
import "../styles/Home.css"
const Suggestions = () => {
  return (
    <>
      <section class="rightSection">
        <div class="mainContainer">
          <div class="header-mainContainer">
            <h4>SUGGESTIONS</h4>
          </div>
          <div class="main-mainContainer">
            <div class="icon">
              <img
                src="https://img.freepik.com/free-vector/family-concept-illustration_114360-2047.jpg?w=900&t=st=1697140462~exp=1697141062~hmac=075b5914292560f050ca6b10fefdbeb5c9d4741e25548ee4c3baa488bfdf3b7c"
                class="icon-image"
              />
              <div class="btn">TIPS TO SPEND QUALITY TIME WITH FAMILY</div>
            </div>
            <div class="icon">
              <img
                src="https://i.pinimg.com/736x/c9/66/b4/c966b48d0298bb9f8cdabf1f9b0933f4.jpg"
                class="icon-image"
              />
              <div class="btn">HOW TO MAKE A RIGHT CAREER CHOICE</div>
            </div>
            <div class="icon">
              <img
                src="https://image.freepik.com/free-vector/dating-couple-enjoying-romantic-dinner_74855-5233.jpg"
                class="icon-image"
              />
              <div class="btn">TOP 10 DATING MISTAKES TO AVOID</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suggestions;
