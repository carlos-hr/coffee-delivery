import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils";
import OrderDetail from "./OrderDetail";
import { ConfirmOrderContainer, OrderSummaryContainer } from "./styled";

const OrderSummary = () => {
  const { cartState, subtotal, deliveryFee } = useCart();
  const total = subtotal + deliveryFee;

  return (
    <OrderSummaryContainer>
      {cartState.cart.map((cartItem) => (
        <OrderDetail
          key={cartItem.id}
          id={cartItem.id}
          qtyInCart={cartItem.quantity}
        />
      ))}
      <ConfirmOrderContainer>
        <span>
          Total de itens <p>R${formatPrice(subtotal)}</p>
        </span>
        <span>
          Entrega <p>R${formatPrice(deliveryFee)}</p>
        </span>
        <span className="total">
          Total <p>R${formatPrice(total)}</p>
        </span>
        <button type="submit">CONFIRMAR PEDIDO</button>
      </ConfirmOrderContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
