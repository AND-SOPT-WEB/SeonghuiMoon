const getRandomNums = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateNums = (start, length) => {
  return Array.from({ length }, (_, i) => i + start);
};

const sortRecords = (records) => {
  return records.sort((a, b) => {
    // 레벨 내림차순
    if (b.level !== a.level) {
      return b.level - a.level;
    }
    // 같은 Level이면 게임 시간 오름차순
    return a.gameTime - b.gameTime;
  });
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
