import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <ButtonContaier>{text}</ButtonContaier>;
};

const ButtonContaier = styled.button`
  width: 23rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE1};
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE2};
  }
`;
export default Button;
