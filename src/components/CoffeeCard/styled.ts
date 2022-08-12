import styled from "styled-components";

export const Card = styled.main`
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.base_card};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  img {
    margin-top: -1.25rem;
  }

  > span {
    padding: 0.25rem 0.5rem;
    width: fit-content;
    height: 1.3125rem;
    background-color: ${(props) => props.theme.primary_light};
    color: ${(props) => props.theme.primary_dark};
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 1.3;
    border-radius: 100px;
    margin-top: 0.75rem;
  }

  h3 {
    font-family: "Baloo 2";
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  > p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme.base_label};
    text-align: center;
    padding: 0.5rem 1.25rem;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.0625rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  width: 100%;

  > span {
    font-size: 0.875rem;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 1.3;
    display: flex;
    align-items: center;

    p {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${(props) => props.theme.base_text};
    }
  }

  > div {
    height: 2.375rem;
    width: 4.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.base_button};
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
      border: none;
      background: ${(props) => props.theme.base_button};
      width: 1rem;
      text-align: center;
    }

    input[type="number"] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    svg {
      cursor: pointer;
      line {
        stroke: ${(props) => props.theme.secondary};
      }
    }
  }

  button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    background-color: ${(props) => props.theme.secondary_dark};
    border-radius: 6px;
    color: ${(props) => props.theme.white};

    svg {
      path {
        fill: ${(props) => props.theme.white};
      }
    }
  }
`;
