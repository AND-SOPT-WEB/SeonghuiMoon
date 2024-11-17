import styled from "@emotion/styled";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <TitleContainer>{text}</TitleContainer>;
};

const TitleContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export default Title;
