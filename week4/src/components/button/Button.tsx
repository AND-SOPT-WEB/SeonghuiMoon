import styled from "@emotion/styled";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <ButtonContaier onClick={onClick} disabled={disabled}>
      {text}
    </ButtonContaier>
  );
};

const ButtonContaier = styled.button<{ disabled: boolean }>`
  width: 23rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  padding: 0 1rem;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.GREY : theme.COLORS.BLUE1};
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.4s ease;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.COLORS.GREY : theme.COLORS.BLUE2};
  }
`;
export default Button;
