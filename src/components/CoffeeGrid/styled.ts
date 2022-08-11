import styled from "styled-components";

export const MainContainer = styled.main`
  padding-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
  justify-content: center;
`;
