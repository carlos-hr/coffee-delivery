import {
  ButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from "./styled";
import logo from "../../assets/logo.svg";
import mapPin from "../../assets/map-pin.svg";
import { ShoppingCartSimple } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Header = () => {
  const { cartQuantity } = useContext(CartContext);
  const navigate = useNavigate();

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
        <CartButton onClick={() => navigate("/checkout")}>
          <ShoppingCartSimple size={22} />
          {cartQuantity > 0 && <span>{cartQuantity}</span>}
        </CartButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
