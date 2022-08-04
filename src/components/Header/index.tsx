import {
  ButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from "./styled";
import logo from "../../assets/logo.svg";
import mapPin from "../../assets/map-pin.svg";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="copo de café" />
      </Link>
      <ButtonsContainer>
        <LocationButton>
          <img src={mapPin} alt="pin de localização" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} />
        </CartButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
