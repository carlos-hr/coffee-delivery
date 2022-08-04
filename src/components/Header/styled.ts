import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: auto;
  height: 6.5rem;
  width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 12.0625rem;
  display: flex;
  gap: 0.75rem;
`;

export const BaseButton = styled.button`
  height: 2.375rem;
  border-radius: 8px;
  border: 0;
  line-height: 1.3;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

export const LocationButton = styled(BaseButton)`
  width: 8.9375rem;
  background: ${(props) => props.theme.secondary_light};
  color: ${(props) => props.theme.secondary_dark};
  justify-content: space-around;
  padding: 0 0.5rem;
`;

export const CartButton = styled(BaseButton)`
  width: 2.375rem;
  background: ${(props) => props.theme.primary_light};
  color: ${(props) => props.theme.primary_dark};
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  svg path {
    fill: ${(props) => props.theme.primary_dark};
  }

  svg circle {
    fill: ${(props) => props.theme.primary_dark};
  }

  &:hover {
    opacity: 0.8;
  }
`;
