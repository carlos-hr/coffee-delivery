/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { MainContainer } from "./styled";
import delivery from "../../assets/delivery.png";

const OrderPlaced = () => {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, []);

  return (
    <MainContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é so aguardar que logo o café chegará até você</p>

        <div>
          <ul>
            <li>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </li>
            <li>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </li>
            <li>
              Pagamento na entrega <strong>Cartão de crédito</strong>
            </li>
          </ul>
        </div>
      </div>

      <img src={delivery} alt="" />
    </MainContainer>
  );
};

export default OrderPlaced;
