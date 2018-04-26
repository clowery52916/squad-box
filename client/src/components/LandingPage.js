import React, {Component} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {Button} from "semantic-ui-react";
import webcam from 'react-webcam'
import WebCamLogin from './webCam/WebCamLogin'
import LoginForm from './users/LoginForm'
import SemanticGrid from "./styles/SemanticGrid";
import NavBar from './styles/NavBar'
import Footer from './styles/Footer'
import Recognize from './kairosApi/Recognize'
import Register from './kairosApi/Register'

const LandingImage = styled.div `
  background-image: url("");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
`;

const LandingText = styled.div `
  margin: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  font-family: cursive;
  color: inherit;

  LandingText.h1 {
    font-size: 30px;
    font-family: cursive;
    color: inherit;
  }
`;
const ButtonPadding = styled.div `
  margin: 5px;
`;
const BodyContent = styled.div `
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;
`;

class Home extends Component {

  render() {
    return (<div>
      <NavBar/>
      <HomeContainer>
        <LandingText>Real people. Real Life. Real Safe</LandingText>
        <Register/>
        <BodyContent>
          <SemanticGrid/>
          <LoginForm/>
        </BodyContent>
      </HomeContainer>
      <Footer/>
    </div>);
  }
}

export default Home;
