import styled from "styled-components";
import Button from "../button/Button";
import Dropdown from "../dropDown/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ time }) => {
  const navigate = useNavigate();

  const onClickGameBtn = () => {
    navigate("/");
  };
  const onClickRankBtn = () => {
    navigate("/ranking");
  };
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isRankingPage = location.pathname === "/ranking";

  return (
    <HeaderContainer>
      <HeaderSection>
        <TitleStyled>1 to 50</TitleStyled>
        <Button btnText="게임" onClick={onClickGameBtn} isActive={isMainPage} />
        <Button
          btnText="랭킹"
          onClick={onClickRankBtn}
          isActive={isRankingPage}
        />
      </HeaderSection>
      {isMainPage && (
        <HeaderSection>
          <Dropdown />
          <TimeStyled>{time}</TimeStyled>
        </HeaderSection>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 8rem;
  background-color: darkslategray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const TitleStyled = styled.h1`
  font-size: 3rem;
  color: white;
`;

const TimeStyled = styled.span`
  font-size: 2rem;
  color: white;
  align-content: center;
`;

export default Header;
