import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { Card, PriceContainer } from "./styled";

interface CoffeeCardProps {
  coffee: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    badges: string[];
  };
}

const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { id, name, description, price, image, badges } = coffee;
  const formatedPrice = price.toString().replace(".", ",").padEnd(4, "0");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const { cart, addCartItem, removeCartItem } = useContext(CartContext);

  function handleAddItem() {
    setQuantity((state) => state + 1);
    addCartItem(id);
  }

  function handleRemoveItem() {
    if (quantity >= 1) {
      setQuantity((state) => state - 1);
      removeCartItem(id);
    }
    return;
  }

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
          <Minus onClick={handleRemoveItem} />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Plus onClick={handleAddItem} />
        </div>

        <button onClick={() => navigate("/checkout")}>
          <ShoppingCartSimple size={22} />
        </button>
      </PriceContainer>
    </Card>
  );
};

export default CoffeeCard;
