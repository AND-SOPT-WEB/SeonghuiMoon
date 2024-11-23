import styled from "@emotion/styled";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import Title from "../components/title/Title";
import { loginUser } from "../apis/axios";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpBtnClick = () => {
    navigate("/signup");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      const userData = { username, password };
      const response = await loginUser(userData);
      localStorage.setItem("token", response.result.token);
      navigate("/hobby");
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginBox>
        <Title text="로그인" />
        <Input
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="로그인" onClick={handleLoginClick} />
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
