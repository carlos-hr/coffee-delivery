import styled from "styled-components";

export const MainContainer = styled.main`
  height: 25rem;
  display: flex;
  gap: 6.375rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }
`;
