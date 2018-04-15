import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import WebCam from './WebCam'
import SemanticGrid from "./SemanticGrid";
import NavBar from './NavBar'
import Footer from './Footer'
import RecognizeUserFace from './RecognizeUserFace'


const LandingImage = styled.div`
  background-image: url("");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const HomeContainer = styled.div`
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
`;

const LandingText = styled.div`
  margin: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  color:;
  border-radius: 10px;
  LandingText.h1 {
    font-size: 40px;
  }
`;
const ButtonPadding = styled.div`
  margin: 5px;
`;
const BodyContent = styled.div`
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;

`;

class Home extends Component {

  render() {
    return (
<div>
      <HomeContainer>
          <NavBar />
        <LandingImage>

          <LandingText>
                <WebCam />
            <h1>SquadBox</h1>
            <p>
              Real People. Real Life. Real Safe
            </p>

            <ButtonPadding>
              <Button type="submit">Sign Up</Button>
            </ButtonPadding>
            <ButtonPadding>
              <Button type="submit">Log In</Button>
            </ButtonPadding>
          </LandingText>
        </LandingImage>
        <BodyContent>
          <SemanticGrid />
        </BodyContent>
        <RecognizeUserFace />
      </HomeContainer>
      <Footer />
      </div>
    );
  }
}

export default Home;
