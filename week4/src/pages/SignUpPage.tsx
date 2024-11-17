import styled from "@emotion/styled";
import Title from "../components/title/Title";
import Input from "../components/input/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button/Button";

const SignUpPage = () => {
  const [loginStep, loginSetStep] = useState(0);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [hobby, setHobby] = useState("");

  const steps = [
    <SignUpStep>
      <SignUpTitle>이름</SignUpTitle>
      <Input
        placeholder="사용자 이름을 입력해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </SignUpStep>,
    <SignUpStep>
      <SignUpTitle>비밀번호</SignUpTitle>
      <Input
        placeholder="비밀번호를 입력해주세요."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="비밀번호 확인"
        type="password"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
      />
    </SignUpStep>,
    <SignUpStep>
      <SignUpTitle>취미</SignUpTitle>
      <Input
        placeholder="취미를 입력해주세요."
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
    </SignUpStep>,
  ];

  const hanleNextStepClick = () => {
    if (loginStep < steps.length - 1) loginSetStep((prev) => prev + 1);
    else {
      alert(`회원가입 성공! 회원 번호 : ${name}, ${password}, ${hobby}`);
      navigate("/home");
    }
  };
  const isValidStep = () => {
    switch (loginStep) {
      case 0:
        return name.trim();
      case 1:
        return (
          password.trim() && checkPassword.trim() && password === checkPassword
        );
      case 2:
        return hobby.trim();
      default:
        return false;
    }
  };

  return (
    <SignUpPageContainer>
      <SignUpBox>
        <Title text="회원가입" />
        {steps[loginStep]}
        <Button
          text={loginStep < steps.length - 1 ? "다음" : "회원가입"}
          onClick={hanleNextStepClick}
          disabled={!isValidStep()}
        ></Button>
        <LoginLink onClick={() => navigate("/")}>
          이미 회원이신가요? 로그인
        </LoginLink>
      </SignUpBox>
    </SignUpPageContainer>
  );
};

const SignUpPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SignUpStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SignUpTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const LoginLink = styled.div`
  font-size: 1.3rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.COLORS.GREY};

  &:hover {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
  cursor: pointer;
  text-decoration: underline;
`;

export default SignUpPage;
