import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import {
  getRankingData,
  removeRankingData,
} from "../../utils/localStorageUtils";
import { sortRecords } from "../../utils/gameUtils";

const Ranking = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const rankingData = getRankingData();
    const sortedRecords = sortRecords(rankingData);

    setRecords(sortedRecords);
  }, []);

  const onClickResetBtn = () => {
    removeRankingData();
    setRecords([]);
  };

  return (
    <RankingContainer>
      <RankingHeader>
        <RankingTitle>랭킹</RankingTitle>
        <ResetBtn>
          <Button btnText={"초기화"} onClick={onClickResetBtn} />
        </ResetBtn>
      </RankingHeader>
      <RankingTable>
        <thead>
          <tr>
            <TableHeader>타임 스탬프</TableHeader>
            <TableHeader>레벨</TableHeader>
            <TableHeader>플레이 시간</TableHeader>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <TableRow key={index}>
              <TableData>{record.currentTime}</TableData>
              <TableData>Level {record.level}</TableData>
              <TableData>{record.gameTime}초</TableData>
            </TableRow>
          ))}
        </tbody>
      </RankingTable>
    </RankingContainer>
  );
};

const RankingContainer = styled.section`
  width: 60rem;
  padding: 3rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const RankingHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RankingTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const ResetBtn = styled.div`
  position: absolute;
  right: 0;
`;

const RankingTable = styled.table`
  font-size: 2rem;
  color: white;
`;
const TableHeader = styled.th`
  padding: 2rem 4rem;
  background-color: cadetblue;
  border: 0.1rem solid white;
`;

const TableRow = styled.tr`
  border: 0.1rem solid white;
  background-color: lightblue;
`;

const TableData = styled.td`
  padding: 2rem;
  border: 0.1rem solid white;
  text-align: center;
`;

export default Ranking;
