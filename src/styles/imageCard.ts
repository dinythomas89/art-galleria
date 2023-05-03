import styled from "styled-components";

export const ImageCardContainer = styled.div`
  height: max-content;
  padding: 10px;
  margin: 2%;
  border-radius: 10px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  -moz-box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardImage = styled.img`
  max-width: 350px;
  height: 300px;
  border-radius: 10px;
  animation: blur 4s 1;

  @keyframes blur {
    from {
      filter: blur(3px);
      opacity: 0;
    }
    to {
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const CardText = styled.p`
  font-size: 1.2em;
`;

export const LikeButton = styled.div<{ isSelected: boolean }>`
  font-size: 28px;
  font-weight: 500;
  padding: 10px 0;
  color: ${(props) => (props.isSelected ? "#213e5c" : "#aaaaad")};

  &:hover {
    animation: wiggle 2s linear infinite;

    @keyframes wiggle {
      0%,
      7% {
        transform: rotateZ(0);
      }
      15% {
        transform: rotateZ(-15deg);
      }
      20% {
        transform: rotateZ(10deg);
      }
      25% {
        transform: rotateZ(-10deg);
      }
      30% {
        transform: rotateZ(6deg);
      }
      35% {
        transform: rotateZ(-4deg);
      }
      40%,
      100% {
        transform: rotateZ(0);
      }
    }
  }
`;
