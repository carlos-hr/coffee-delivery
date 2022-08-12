import { coffes } from "../../db/coffees";
import CoffeeCard from "../CoffeeCard";
import { MainContainer } from "./styled";

const CoffeeGrid = () => {
  return (
    <MainContainer>
      {coffes.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </MainContainer>
  );
};

export default CoffeeGrid;
