import styled from "@emotion/styled";

interface InputProps {
  placeholder: string;
  type?: string;
}

const Input = ({ placeholder, type = "text" }: InputProps) => {
  return <InputContainer placeholder={placeholder} type={type} />;
};

const InputContainer = styled.input`
  width: 23rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  padding: 0 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export default Input;
