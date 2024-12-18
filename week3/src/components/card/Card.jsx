import styled, { keyframes, css } from "styled-components";
import { useState } from "react";

const Card = ({ number, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
      if (onClick) onClick();
    }, 300);
  };

  return (
    <CardStyled onClick={handleClick} isClicked={isClicked}>
      {number}
    </CardStyled>
  );
};

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
`;

const CardStyled = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: darkcyan;

  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  ${({ isClicked }) =>
    isClicked &&
    css`
      animation: ${blink} 0.3s linear;
    `}
`;

export default Card;
