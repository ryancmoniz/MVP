const getNeeds = (personalityNeeds) => {
  const needs = {
    challenge: personalityNeeds[0].percentile,
    closeness: personalityNeeds[1].percentile,
    curiosity: personalityNeeds[2].percentile,
    excitement: personalityNeeds[3].percentile,
    harmony: personalityNeeds[4].percentile,
    ideal: personalityNeeds[5].percentile,
    liberty: personalityNeeds[6].percentile,
    love: personalityNeeds[7].percentile,
    practicality: personalityNeeds[8].percentile,
    selfExpression: personalityNeeds[9].percentile,
    stability: personalityNeeds[10].percentile,
    structure: personalityNeeds[11].percentile,
  };

  return needs;
};

module.exports = {
  getNeeds,
};
