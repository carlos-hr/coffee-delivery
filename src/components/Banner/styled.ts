import styled from "styled-components";
import bannerBackground from "../../assets/banner-background.svg";

export const BannerContainer = styled.main`
  background-image: url(${bannerBackground});
  padding: 5.75rem 1rem;
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  > img {
    height: 22.5rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  width: 36.75rem;
  max-width: 70%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  line-height: 1.3;
  color: ${(props) => props.theme.base_title};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.base_subtitle};
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  /* grid-template-columns: repeat(2, 1fr); */
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`;

interface IconContainerProps {
  color: "primary_dark" | "primary" | "base_text" | "secondary_dark";
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: ${(props) => {
    switch (props.color) {
      case "base_text":
        return props.theme.base_text;
      case "primary_dark":
        return props.theme.primary_dark;
      case "primary":
        return props.theme.primary;
      case "secondary_dark":
        return props.theme.secondary_dark;
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
`;

export const GridItem = styled.p`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${(props) => props.theme.base_text};
  font-size: 1rem;
`;
