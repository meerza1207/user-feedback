import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
// import colors from '../constants/colors';
import { FaStar } from "react-icons/fa";

function App() {
  // Local State
  const [essayHover, setEssayHover] = useState(0);
  const [essayReview, setEssayReview] = useState(0);
  const essayStars = Array(5).fill(0);
  const [siteHover, setSiteHover] = useState(0);
  const [siteReview, setSiteReview] = useState(0);
  const siteStars = Array(5).fill(0);

  const essayContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sagittis erat, et iaculis neque. Nulla ac elit lacus. Vestibulum eu imperdiet sapien. Proin et mollis enim. Aliquam metus risus, venenatis ut aliquam pretium, dapibus sed leo. Phasellus id dui ac lorem eleifend scelerisque id vel lacus. Praesent sit amet eros bibendum, rutrum nisl et, commodo elit. Quisque elit arcu, iaculis nec diam at, pellentesque feugiat ligula. Maecenas vel bibendum lorem. Donec arcu urna, imperdiet nec ullamcorper at, molestie in felis. Vestibulum congue erat vitae bibendum gravida. Donec ultrices eros quis ultricies porta. Vivamus fringilla efficitur turpis ac imperdiet.";
  const essayHeading = "Lorem Ipsum"
  const essayReviewTitle = "Please rate our essay";
  const feedbackSectionTitle= "Your Feedback Matters";
  const name = "Smodin";
  const siteReviewTitle = "Please rate our website";

  return (
    <div className='Container' data-testid="reviewSectionWrapper">
      <header className='Header'>
      <img src={logo} className='Logo' data-testid="logoWrapper" alt="logo"></img>
      <h1 data-testid="logoTitle"> {name} </h1>
      </header>
      <body className='Body'>
      <h3 data-testid="feedbackSectionTitle">{feedbackSectionTitle}</h3>
      <div className='ReviewSection' data-testid="essayReviewSectionWrapper">
        {/* essay review section  */}
       <div className='Stars' data-testid="essayReviewWrapper">
        <div data-testid="essayReviewTitle">{essayReviewTitle}</div>
        <div>
        {essayStars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => setEssayReview(index + 1)}
              onMouseOver={() => setEssayHover(index + 1)}
              onMouseLeave={() => setEssayHover(0)}
              color={(essayHover || essayReview) > index ? "orange" : "grey"}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        </div>
       </div>
        {/* site review section  */}
       <div className='Stars' data-testid="siteReviewWrapper">
        <div data-testid="siteReviewWrapper">{siteReviewTitle}</div>
        <div>{siteStars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => setSiteReview(index + 1)}
              onMouseOver={() => setSiteHover(index + 1)}
              onMouseLeave={() => setSiteHover(0)}
              color={(siteHover || siteReview) > index ? "orange" : "grey"}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
        </div>
       </div>
       <div className='Container'>
        {/* logic for review button  */}
       {siteReview  === 5  && essayReview === 5 ?
          <button className='LeaveButton' data-testid="LeaveButton" onClick={() => {
            /*here integrate the api function call for trustPilot*/
          }}>Leave us a review</button> : null}
       </div>
      </div>
        {/* essay section  */}
      <h2 className='EssayHeading' data-testid="EssayHeadingSection">
        {essayHeading}
      </h2>
      <div className='EssayContent' data-testid="EssayContentSection">
        {essayContent}
      </div>
      </body>

    </div>
  );
};

export default App;
