import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 0;
  gap: 6px;
  }`;

export const PaginationList = styled.li<{ primary: string }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.primary === "active" ? "#FFFFFF" : "#213e5c")};
  background: ${(props) =>
    props.primary === "active" ? "#213e5c" : "#FFFFFF"};
  padding: 8px 15px;
  border: 1px solid #213e5c;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  list-style-type: none;

  &:hover {
    color: #ffffff;
    background: #5e7d9b;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;
