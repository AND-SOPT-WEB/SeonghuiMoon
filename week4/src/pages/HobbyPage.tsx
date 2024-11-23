import styled from "@emotion/styled";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { myHobby, userHobby } from "../apis/axios";
import { useEffect, useState } from "react";

const HobbyPage = () => {
  const [myHobbyData, setMyHobbyData] = useState("");
  const [userHobbyData, setUserHobbyData] = useState("");
  const [userNo, setUserNo] = useState("");

  useEffect(() => {
    const getMyHobby = async () => {
      try {
        const response = await myHobby();
        setMyHobbyData(response.result.hobby);
      } catch (error) {
        console.error(error);
      }
    };

    getMyHobby();
  }, []);

  const handleSearchClick = async () => {
    try {
      const response = await userHobby(userNo);
      setUserHobbyData(response.result.hobby);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  return (
    <HobbyPageContainer>
      <Header />
      <Title text="취미" />
      <HobbyBox>
        <SubTitle>나의 취미</SubTitle>
        {myHobbyData}
        <SubTitle>다른 사람들의 취미</SubTitle>
        <Input
          placeholder="사용자 번호"
          value={userNo}
          onChange={(e) => setUserNo(e.target.value)}
        />
        <Button text="검색" onClick={handleSearchClick} />
        {userNo}번 사용자의 취미 :{userHobbyData}
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