import React, { Component } from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  height: 15vh;
  width: 100vw;
  background-color: #151515;
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

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <h5>Copyright 2018</h5>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
