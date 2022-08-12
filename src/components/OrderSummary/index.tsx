import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import {
  CoffeeDetails,
  CoffeeInfo,
  ConfirmOrderContainer,
  OrderSummaryContainer,
  QuantityDetails,
} from "./styled";

const OrderSummary = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <OrderSummaryContainer>
      <CoffeeInfo>
        <img src="https://i.postimg.cc/PfbMqW0j/Type-Americano.png" />

        <CoffeeDetails>
          <span>
            Expresso Tradicional
            <p>R$9,90</p>
          </span>

          <QuantityDetails>
            <div>
              <Minus onClick={() => setQuantity((state) => state - 1)} />
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <Plus onClick={() => setQuantity((state) => state + 1)} />
            </div>

            <button>
              <Trash size={16} />
              REMOVER
            </button>
          </QuantityDetails>
        </CoffeeDetails>
      </CoffeeInfo>

      <ConfirmOrderContainer>
        <span>
          Total de itens <p>R$29,70</p>
        </span>
        <span>
          Entrega <p>R$3,50</p>
        </span>
        <span className="total">
          Total <p>R$33,20</p>
        </span>
        <button>CONFIRMAR PEDIDO</button>
      </ConfirmOrderContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
