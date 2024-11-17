import styled from "@emotion/styled";
import Input from "../components/input/Input";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginBox>
        <InputTitle>로그인</InputTitle>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" type="password" />
      </LoginBox>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const InputTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export default LoginPage;
