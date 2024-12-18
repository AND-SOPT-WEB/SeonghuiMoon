const recordRankingData = (currentTime, level, time) => {
  const gameData = {
    currentTime: currentTime,
    level: level,
    gameTime: time,
  };

  localStorage.setItem(
    "rankingData",
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem("rankingData")) || []),
      gameData,
    ])
  );
};

const getRankingData = () => {
  return JSON.parse(localStorage.getItem("rankingData")) || [];
};

const removeRankingData = () => {
  localStorage.removeItem("rankingData");
};

export { recordRankingData, getRankingData, removeRankingData };
