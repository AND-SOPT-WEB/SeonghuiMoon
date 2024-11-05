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

export { getRandomNums, generateNums, sortRecords };
