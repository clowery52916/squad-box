import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Nav = styled.div `
  height: 15vh;
  width: 100vw;
  background-color: #aaaaaa;
  color: white;

  font-size: 15px;
  font-family: 'Molengo', sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border-bottom: .9px solid #c1c1c1;
  a {
    color: white;
    margin: auto;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  font-family: 'Sacramento', cursive;
  font-size: 40px;
`
const LinkContainer = styled.div `
  display: flex;
  margin-right: 10px;
${'' /* font-family: 'Sacramento', cursive; */}
  color: inherit;
`;

const LinkMargin = styled.div `
  margin: 10px;

`;

const LogoFlex = styled.div `
display: flex;
margin-left: 10px;
`

class Navbar extends Component {
  render() {
    return (<Nav>
      <LogoFlex>
        <Link to="/">
          <Logo>SquadBox</Logo>
        </Link>
      </LogoFlex>

      {/* site name goes here */}
      <div>
        <LinkContainer>
          <LinkMargin>
            <Link to="/users">All Users</Link>
            {/* link to all users */}
          </LinkMargin>
          <LinkMargin>
            <Link to="/">Home</Link>
            {/* link to home page */}
          </LinkMargin>
          <LinkMargin>
            {/* <Link to='/bottom'>Scroll Down to Login In</Link> */}
            {/* link to all users */}
          </LinkMargin>
        </LinkContainer>
      </div>
    </Nav>);
  }
}

export default Navbar;
