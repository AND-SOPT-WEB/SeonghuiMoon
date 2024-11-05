import Header from "../components/header/header";
import Game from "../components/game/Game";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Mainpage = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const [selectedLevel, setSelectedLevel] = useState(1);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 0.01);
      }, 10);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => stopTimer();
  }, []);

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
    stopTimer();
  };

  return (
    <PageContainer>
      <Header time={time.toFixed(2)} handleSelectLevel={handleSelectLevel} />
      <Game
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        time={time.toFixed(2)}
        level={selectedLevel}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Mainpage;