import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { formatPrice } from "../../utils";
import OrderDetail from "./OrderDetail";
import { ConfirmOrderContainer, OrderSummaryContainer } from "./styled";

const OrderSummary = () => {
  const { cartState, subtotal } = useContext(CartContext);
  const deliveryFee = 5;
  const total = subtotal + deliveryFee;

  return (
    <OrderSummaryContainer>
      {cartState.cart.length > 0 ? (
        <>
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
            <button>CONFIRMAR PEDIDO</button>
          </ConfirmOrderContainer>
        </>
      ) : (
        <p className="empty-cart">
          Você ainda não selecionou nenhum de nossos cafés :(
        </p>
      )}
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
