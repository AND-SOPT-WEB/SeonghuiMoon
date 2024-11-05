const getRandomNums = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateNums = (start, length) => {
  return Array.from({ length }, (_, i) => i + start);
};

const sortRecords = (rankingData) => {
  return rankingData.sort(
    (a, b) => parseFloat(a.gameTime) - parseFloat(b.gameTime)
  );
};

const getCardSettings = (level) => {
  switch (level) {
    case 1:
      return {
        gameSize: 3,
        middleNum: 9,
        hideEndNum: 18,
      };
    case 2:
      return {
        gameSize: 4,
        middleNum: 16,
        hideEndNum: 32,
      };
    case 3:
      return {
        gameSize: 5,
        middleNum: 25,
        hideEndNum: 50,
      };
    default:
      return {
        gameSize: 3,
        middleNum: 9,
        hideEndNum: 18,
      };
  }
};

export { getRandomNums, generateNums, sortRecords, getCardSettings };
