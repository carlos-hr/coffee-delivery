import { Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import {
  CoffeeDetails,
  CoffeeInfo,
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
          <p>Expresso Tradicional</p>

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

        <div>R$9,90</div>
      </CoffeeInfo>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
