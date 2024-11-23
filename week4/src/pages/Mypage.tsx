import styled from "@emotion/styled";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { fixUserInfo } from "../apis/axios";
import { useState } from "react";
import { FixMyData } from "../apis/axios";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const navigate = useNavigate();

  const handleEditClick = async () => {
    if (!password.trim() && !hobby.trim()) {
      alert("수정 사항을 입력해주세요.");
      return;
    }
    try {
      const fixMyData: FixMyData = {};
      if (password.trim()) fixMyData.password = password.trim();
      if (hobby.trim()) fixMyData.hobby = hobby.trim();
      await fixUserInfo(fixMyData);
      alert("정보 수정에 성공했습니다.");
      navigate("/");
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  return (
    <MyPageContainer>
      <Header />
      <Title text="내 정보 수정하기" />
      <MyBox>
        <SubTitle>새 비밀번호</SubTitle>
        <Input
          placeholder="새 비밀번호를 입력하세요."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubTitle>새 취미</SubTitle>
        <Input
          placeholder="새 취미를 입력하세요."
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <Button text="수정하기" onClick={handleEditClick} />
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
