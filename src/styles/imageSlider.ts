import styled from "styled-components";

export const ImageSliderComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SliderTitle = styled.h2`
  text-align: center;
  padding: 20px;
  font-size: 1.8em;
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const SliderContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const SliderContent = styled.div`
  display: flex;
  transition: all 250ms linear;
`;

export const PrevButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  font-size: 34px;
  color: black;
  background: white;
  border: none;
  cursor: pointer;
  padding: 10px;

  &:hover {
    font-size: 38px;
    font-weight: 900;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  font-size: 34px;
  color: black;
  background: white;
  border: none;
  cursor: pointer;
  padding: 10px;

  &:hover {
    font-size: 38px;
    font-weight: 900;
  }
`;
