import styled from "styled-components";

const Button = ({ btnText, onClick, isActive = true }) => {
  return (
    <ButtonContainer onClick={onClick} $isActive={isActive}>
      {btnText}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: auto;
  height: 4rem;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${({ $isActive }) => ($isActive ? "darkcyan" : "inherit")};
`;
export default Button;
