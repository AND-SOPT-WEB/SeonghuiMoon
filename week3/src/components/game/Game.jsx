import styled from "styled-components";
import Card from "../card/Card";
import { useState } from "react";
import { getRandomNums, generateNums } from "../../utils/gameUtils";
import { recordRankingData } from "../../utils/localStorageUtils";

const Game = ({ startTimer, stopTimer, resetTimer, time, level }) => {
  const [nextNum, setNextNum] = useState(1);

  const [visibleNums, setVisibleNums] = useState(() =>
    getRandomNums(generateNums(1, 9))
  );
  const [hideNums, setHideNums] = useState(() =>
    getRandomNums(generateNums(10, 9))
  );

  const resetGame = () => {
    setNextNum(1);
    setVisibleNums(getRandomNums(generateNums(1, 9)));
    setHideNums(getRandomNums(generateNums(10, 9)));
    resetTimer();
  };

  const updateCard = (index, newNumber = null) => {
    setVisibleNums((prev) => {
      const newNums = [...prev];
      newNums[index] = newNumber;
      return newNums;
    });
  };

  const handleCardClick = (number, index) => {
    if (number !== nextNum) return;

    if (nextNum === 1) startTimer();

    if (nextNum === 18) {
      stopTimer();
      alert(`게임 끝~~!!!!! ${time}초 걸렸습니당`);

      const currentTime = new Date().toLocaleString();
      recordRankingData(currentTime, level, time);
      resetGame();
      return;
    }

    if (nextNum >= 10) {
      updateCard(index);
    } else {
      const [nextVisibleNum, ...remainingNums] = hideNums;
      updateCard(index, nextVisibleNum);
      setHideNums(remainingNums);
    }

    setNextNum((prev) => prev + 1);
  };

  return (
    <GameContainer>
      <NextNumStyled>다음 숫자 : {nextNum}</NextNumStyled>
      <CardGrid size={3}>
        {visibleNums.map((number, index) =>
          number ? (
            <Card
              key={number}
              number={number}
              onClick={() => handleCardClick(number, index)}
            />
          ) : (
            <EmptyCard key={index} />
          )
        )}
      </CardGrid>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;
  gap: 4rem;
`;

const NextNumStyled = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
`;

const EmptyCard = styled.div`
  width: 4rem;
  height: 4rem;
`;

export default Game;
