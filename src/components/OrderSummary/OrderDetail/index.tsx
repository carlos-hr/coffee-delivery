import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { coffees } from "../../../db/coffees";
import { formatPrice } from "../../../utils";
import { CoffeeDetails, CoffeeInfo, QuantityDetails } from "./styled";

interface OrderDetailsProps {
  id: number;
  qtyInCart: number;
}

const OrderDetail = ({ id, qtyInCart }: OrderDetailsProps) => {
  const coffeeInCart = coffees.find((coffee) => coffee.id === id);
  const { name, price, image } = coffeeInCart!;

  const formatedPrice = formatPrice(price);
  const [quantity, setQuantity] = useState(qtyInCart);

  const { deleteCartItem, handleAddItem, handleRemoveItem } =
    useContext(CartContext);

  const data = {
    id,
    state: quantity,
    setState: setQuantity,
  };

  return (
    <CoffeeInfo>
      <img src={image} alt={name} />

      <CoffeeDetails>
        <span>
          {name}
          <p>R${formatedPrice}</p>
        </span>

        <QuantityDetails>
          <div>
            <Minus onClick={() => handleRemoveItem({ data })} />
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Plus onClick={() => handleAddItem({ data })} />
          </div>

          <button onClick={() => deleteCartItem(id)}>
            <Trash size={16} />
            REMOVER
          </button>
        </QuantityDetails>
      </CoffeeDetails>
    </CoffeeInfo>
  );
};

export default OrderDetail;
