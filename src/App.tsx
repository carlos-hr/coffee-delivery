import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Router from "./routes/Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./contexts/CartContext";
import { OrderContextProvider } from "./contexts/OrderContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
