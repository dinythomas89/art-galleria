import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 20px;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #020024;
`;

export const Artist = styled.div`
  cursor: pointer;
  border-radius: 10px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const ArtistTitle = styled.h3`
  padding: 20px 0 0px;
  text-align: center;
  font-size: 18px;
`;

export const ArtistText = styled.p`
  opacity: 0;
  text-align: center;
  padding: 5px;

  ${Artist}:hover & {
    opacity: 1;
  }
`;
