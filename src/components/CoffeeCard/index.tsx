import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, PriceContainer } from "./styled";

interface CoffeeCardProps {
  coffee: {
    name: string;
    description: string;
    price: number;
    image: string;
    badges: string[];
  };
}

const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { name, description, price, image, badges } = coffee;
  const formatedPrice = price.toString().replace(".", ",").padEnd(4, "0");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <Card>
      <img src={image} alt={name} />
      <div className="badges">
        {badges.map((badge) => (
          <span key={badge}>{badge.toUpperCase()}</span>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>

      <PriceContainer>
        <span>
          R$<p>{formatedPrice}</p>
        </span>

        <div>
          <Minus onClick={() => setQuantity((state) => state - 1)} />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Plus onClick={() => setQuantity((state) => state + 1)} />
        </div>

        <button onClick={() => navigate("/checkout")}>
          <ShoppingCartSimple size={22} />
        </button>
      </PriceContainer>
    </Card>
  );
};

export default CoffeeCard;
