import styled from "@emotion/styled";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import Title from "../components/title/Title";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpBtnClick = () => {
    navigate("/signup");
  };

  return (
    <LoginPageContainer>
      <LoginBox>
        <Title text="로그인" />
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" type="password" />
        <Button text="로그인" />
        <SignInLink onClick={handleSignUpBtnClick}>회원가입</SignInLink>
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

const SignInLink = styled.div`
  font-size: 1.3rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.COLORS.GREY};

  &:hover {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
  cursor: pointer;
  text-decoration: underline;
`;
export default LoginPage;
