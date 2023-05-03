import styled from "styled-components";

export const LoadingContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CicleBorder = styled.div`
  width: 150px;
  height: 150px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #213e5c;
  background: linear-gradient(
    0deg,
    rgba(33, 62, 92, 0.1) 33%,
    rgba(33, 62, 92, 1) 100%
  );
  animation: spin 0.8s linear 0s infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const CicleCore = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
`;
