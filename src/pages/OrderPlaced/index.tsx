/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { DetailsContainer, MainContainer, OrderDetails } from "./styled";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { IconContainer } from "../../components/Banner/styled";
import delivery from "../../assets/delivery.png";

const OrderPlaced = () => {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, []);

  return (
    <MainContainer>
      <DetailsContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é so aguardar que logo o café chegará até você</p>

        <OrderDetails>
          <ul>
            <li>
              <IconContainer color="secondary">
                <MapPin />
              </IconContainer>

              <div>
                Entrega em
                <br />
                <strong>Rua João Daniel Martinelli, 102</strong>
              </div>
            </li>

            <li>
              <IconContainer color="primary">
                <Timer />
              </IconContainer>

              <div>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </li>

            <li>
              <IconContainer color="primary_dark">
                <CurrencyDollar />
              </IconContainer>

              <div>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </div>
            </li>
          </ul>
        </OrderDetails>
      </DetailsContainer>

      <img src={delivery} alt="" />
    </MainContainer>
  );
};

export default OrderPlaced;
