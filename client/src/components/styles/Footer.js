import React, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  height: 15vh;
  width: 100vw;
  background-color: #aaaaaa;
  color: #EAEAEA;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 0 auto;
  border-top: .9px solid #EAEAEA;
  h5 {
    margin: 20px;
  }
`;
const TextContainer = styled.div`
  font-family: cursive;
  color: inherit;
`

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <TextContainer>
          <h5>Copyright 2018</h5>
          </TextContainer>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
