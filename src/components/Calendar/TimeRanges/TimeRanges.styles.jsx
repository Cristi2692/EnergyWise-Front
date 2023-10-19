import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin: 8px;
`;
