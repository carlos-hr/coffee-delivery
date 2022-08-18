import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 25rem;
  display: flex;
  gap: 6.375rem;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    color: ${(props) => props.theme.primary_dark};
    font-weight: 800;
  }

  p {
    font-family: "Roboto";
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
    font-weight: 400;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const OrderDetails = styled.div`
  height: 16.875rem;
  position: relative;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};
  padding: 2.5rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }

  ::after {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
    content: "";
    z-index: -1;
    border-radius: 6px 36px;
  }
`;
