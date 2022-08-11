import { Banner, CoffeeGrid } from "../../components";
import { GridContainer } from "./styled";

const Home = () => {
  return (
    <>
      <Banner />
      <GridContainer>
        <h1>Nossos Cafés</h1>
        <CoffeeGrid />
      </GridContainer>
    </>
  );
};

export default Home;
