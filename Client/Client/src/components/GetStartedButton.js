import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const GetStartedButton = () => {
      const navigate = useNavigate();
  return (
    <StyledWrapper>
      <button type="button" className="btn" onClick={() => navigate("/chatbot")}>
        <strong>GET STARTED</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 4rem;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5rem;
    border: double 4px transparent;
    background-size: 300% 300%;
    animation: gradient_301 5s ease infinite;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    transition: 0.5s;
  }

  strong {
    z-index: 2;
    font-family: "Avalors Personal Use", sans-serif;
    font-size: 14px;
    letter-spacing: 4px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
  }

  #container-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5rem;
    z-index: -1;
    overflow: hidden;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .circle {
    width: 50%;
    height: 100%;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn:active {
    border: double 4px #fe53bb;
    animation: none;
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    width: 200rem;
    height: 200rem;
    background: transparent;
  }

  #stars::before,
  #stars::after {
    content: "";
    position: absolute;
    background-image: radial-gradient(#fff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    opacity: 0.5;
    animation: animStar 60s linear infinite;
  }

  #stars::after {
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  @keyframes animStar {
    from { transform: translateY(0); }
    to { transform: translateY(-135rem); }
  }

  @keyframes animStarRotate {
    from { transform: rotate(360deg); }
    to { transform: rotate(0); }
  }

  @keyframes gradient_301 {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulse_3011 {
    0% { transform: scale(0.75); box-shadow: 0 0 0 0 rgba(0,0,0,0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0,0,0,0); }
    100% { transform: scale(0.75); box-shadow: 0 0 0 0 rgba(0,0,0,0); }
  }
`;

export default GetStartedButton;