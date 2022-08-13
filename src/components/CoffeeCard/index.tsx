import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
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
  const { cartState, addCartItem, removeCartItem } = useContext(CartContext);

  const formatedPrice = price.toString().replace(".", ",").padEnd(4, "0");
  const navigate = useNavigate();

  const coffeeInCart = cartState.cart.find((cartItem) => cartItem.id === id);
  const inCartQuantity = coffeeInCart?.quantity || 0;
  const [inputQuantity, setInputQuantity] = useState(inCartQuantity);

  function handleAddItem() {
    setInputQuantity((state) => state + 1);
    addCartItem(id);
  }

  function handleRemoveItem() {
    if (inputQuantity >= 1) {
      setInputQuantity((state) => state - 1);
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
            value={inputQuantity}
            onChange={(e) => setInputQuantity(Number(e.target.value))}
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
