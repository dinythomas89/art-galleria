import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #213e5c;
  padding: 0 5%;
  color: #f4d06f;
`;

export const Text = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  color: #f4d06f;

  &:hover {
    color: white;
  }
`;
