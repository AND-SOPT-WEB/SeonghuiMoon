import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <HeaderContainer>
      <LeftTab>
        마이페이지
        <MenuTab onClick={() => handleTabClick("/hobby")}>취미</MenuTab>
        <MenuTab onClick={() => handleTabClick("/mypage")}>내 정보</MenuTab>
      </LeftTab>
      <MenuTab onClick={() => handleLogoutClick()}>로그아웃</MenuTab>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE1};
  font-size: 2rem;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  top: 0;
`;

const LeftTab = styled.div`
  display: flex;
  gap: 3rem;
`;

const MenuTab = styled.div`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export default Header;
