import styled from "@emotion/styled";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const MyPage = () => {
  return (
    <MyPageContainer>
      <Header />
      <Title text="내 정보 수정하기" />
      <MyBox>
        <SubTitle>새 비밀번호</SubTitle>
        <Input placeholder="새 비밀번호를 입력하세요." type="password" />
        <SubTitle>새 취미</SubTitle>
        <Input placeholder="새 취미를 입력하세요." />
        <Button text="수정하기" />
      </MyBox>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export default MyPage;
