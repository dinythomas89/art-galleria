import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const NotFoundSymbol = styled.h1`
  font-size: 4em;
`;

export const NotFoundText = styled.div`
  font-size: 1.1em;
  width: 75%;
  padding: 30px;
`;

export const LinkText = styled.p`
  padding: 5px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #b49542;
  font-size: 1.1em;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: blue;
  }
`;
