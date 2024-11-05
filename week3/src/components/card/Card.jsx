import styled from "styled-components";

const Card = ({ number, onClick }) => {
  return <CardStyled onClick={onClick}>{number}</CardStyled>;
};

const CardStyled = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: darkcyan;

  font-size: 4rem;
  align-content: center;
  text-align: center;
  color: white;
`;

export default Card;
