import {
  BannerContainer,
  GridItem,
  IconContainer,
  InfoContainer,
  ItemsGrid,
  Subtitle,
  Title,
  TitleContainer,
} from "./styled";
import coffee from "../../assets/banner-coffee.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

const Banner = () => {
  return (
    <BannerContainer>
      <InfoContainer>
        <TitleContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleContainer>
        <ItemsGrid>
          <GridItem>
            <IconContainer color="primary_dark">
              <ShoppingCart />
            </IconContainer>
            Compra simples e segura
          </GridItem>

          <GridItem>
            <IconContainer color="base_text">
              <Package />
            </IconContainer>
            Embalagem mantém o café intacto
          </GridItem>

          <GridItem>
            <IconContainer color="primary">
              <Timer />
            </IconContainer>
            Entrega rápida e rastreada
          </GridItem>

          <GridItem>
            <IconContainer color="secondary_dark">
              <Coffee />
            </IconContainer>
            O café chega fresquinho até você
          </GridItem>
        </ItemsGrid>
      </InfoContainer>

      <img src={coffee} alt="Copo de café" />
    </BannerContainer>
  );
};

export default Banner;
