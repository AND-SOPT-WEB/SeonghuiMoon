import styled from "@emotion/styled";

interface InputProps {
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, type = "text", value, onChange }: InputProps) => {
  return (
    <InputContainer
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
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
