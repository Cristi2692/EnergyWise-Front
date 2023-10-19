import styled from "@emotion/styled";

export const SButton = styled.button`
  padding: 13px;
  text-align: center;
  width: 100px;
  background-color: ${({ color }) => color};
  border: ${({ isActive }) =>
    isActive ? " 1px solid black" : "1px solid white"};
`;
