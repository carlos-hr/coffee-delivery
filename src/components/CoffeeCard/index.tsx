import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { Card, PriceContainer } from "./styled";

const CoffeeCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card>
      <img src="https://i.postimg.cc/PfbMqW0j/Type-Americano.png" />
      <span>TRADICIONAL</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <PriceContainer>
        <span>
          R$<p>9,90</p>
        </span>

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
          <ShoppingCartSimple />
        </button>
      </PriceContainer>
    </Card>
  );
};

export default CoffeeCard;
