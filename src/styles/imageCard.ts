import styled from "styled-components";

export const ImageCardContainer = styled.div`
  height: max-content;
  padding: 10px;
  margin: 2%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

export const CardImage = styled.img`
  width: auto;
  height: 300px;
`;

export const CardText = styled.p`
  font-size: 1.2em;
`;

export const LikeButton = styled.div<{ isSelected: boolean }>`
  font-size: 24px;
  font-weight: 500;
  padding: 10px 0;
  color: ${(props) => (props.isSelected ? "#213e5c" : "#cbd3db")};
`;
