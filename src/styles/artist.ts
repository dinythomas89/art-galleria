import styled from "styled-components";

export const ArtistContainer = styled.main`
  margin: 20px;
`;

export const ArtistTitle = styled.h1`
  text-align: center;
`;

export const ArtistDetails = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ArtistImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;

export const ArtistDescription = styled.p`
  width: 50vw;
  font-weight: 500;
  font-size: 1.1em;
  font-family: Cambria;
  line-height: 1.5em;
  word-spacing: 2px;
  letter-spacing: 1.2px;
`;

export const SourceLink = styled.a`
  color: #6b6b6c;
  margin-bottom: 30px;
  padding: 10px;

  &:hover {
    color: black;
    cursor: pointer;
  }

  &:active {
    color: blue;
    cursor: pointer;
  }
`;

export const SourceLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
`;
