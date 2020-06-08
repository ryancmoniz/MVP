const getValues = (personalityValues) => {
  const values = {
    conservation: personalityValues[0].percentile,
    change: personalityValues[1].percentile,
    hedonism: personalityValues[2].percentile,
    selfEnhancement: personalityValues[3].percentile,
    selfTranscendence: personalityValues[4].percentile,
  };

  return values;
};


module.exports = {
  getValues,
};
