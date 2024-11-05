import styled from "styled-components";
import Header from "../components/header/header";
import Ranking from "../components/ranking/Ranking";

const RankingPage = () => {
  return (
    <PageContainer>
      <Header />
      <Ranking />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`;

export default RankingPage;
