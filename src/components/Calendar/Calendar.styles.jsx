import styled from "@emotion/styled";

export const SContainer = styled.div`
  width: 800px;
  border: 1.8px solid #006775;
  border-radius: 3px;
  margin: 50px auto;
  position: relative;
  margin-bottom: 100px;
`;

export const SDayContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
`;

export const SDayHeading = styled.h2`
  text-align: center;
  background-color: #006775;
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
`;

export const SDayButton = styled.button`
              flex: 1;
              padding: 10px;
              cursor: pointer;
              border: none;
              backgroundColor:
                ${({ isActive }) => (isActive ? "#e0e0e0" : "#ffffff")}};
`;

export const SDaysContainer = styled.div`
  display: flex;
`;
