import styled from "styled-components";

export const GridContainer = styled.div`
  padding: 2rem 10rem;

  > h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`;
