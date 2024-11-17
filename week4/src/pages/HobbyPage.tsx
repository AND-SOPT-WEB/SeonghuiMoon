import styled from "@emotion/styled";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const HobbyPage = () => {
  return (
    <HobbyPageContainer>
      <Header />
      <Title text="취미" />
      <HobbyBox>
        <SubTitle>나의 취미</SubTitle>
        포멧몬
        <SubTitle>다른 사람들의 취미</SubTitle>
        <Input placeholder="사용자 번호" />
        <Button text="검색" />
      </HobbyBox>
    </HobbyPageContainer>
  );
};

const HobbyPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HobbyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export default HobbyPage;
