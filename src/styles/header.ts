import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 18vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #213e5c;
  padding: 2.5%;
  color: #f4d06f;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 5%;
`;

export const NavBar = styled.nav`
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f4d06f;
  padding: 2em;
  font-size: 1.5em;

  &:hover {
    color: white;
  }
`;
