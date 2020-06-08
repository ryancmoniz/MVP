const getBigFive = (personality) => {
  const Openness = personality[0];
  const Conscientousness = personality[1];
  const Extraversion = personality[2];
  const Agreeableness = personality[3];
  const EmotionalRange = personality[4];

  const bigFive = {
    openness: {
      score: Openness.percentile,
      factors: {
        adventurousness: Openness.children[0].percentile,
        artisticInterests: Openness.children[1].percentile,
        emotionality: Openness.children[2].percentile,
        imagination: Openness.children[3].percentile,
        intellect: Openness.children[4].percentile,
        authorityChallenging: Openness.children[5].percentile,
      },
    },
    conscientousness: {
      score: Conscientousness.percentile,
      factors: {
        achievementStriving: Conscientousness.children[0].percentile,
        cautiousness: Conscientousness.children[1].percentile,
        dutifulness: Conscientousness.children[2].percentile,
        orderliness: Conscientousness.children[3].percentile,
        selfDiscipine: Conscientousness.children[4].percentile,
        selfEfficacy: Conscientousness.children[5].percentile,
      },
    },
    extraversion: {
      score: Extraversion.percentile,
      factors: {
        activityLevel: Extraversion.children[0].percentile,
        assertiveness: Extraversion.children[1].percentile,
        cheerfulness: Extraversion.children[2].percentile,
        excitmentSeeking: Extraversion.children[3].percentile,
        outgoing: Extraversion.children[4].percentile,
        gregariousness: Extraversion.children[5].percentile,
      },
    },
    agreeableness: {
      score: Agreeableness.percentile,
      factors: {
        altruism: Agreeableness.children[0].percentile,
        cooperation: Agreeableness.children[1].percentile,
        modesty: Agreeableness.children[2].percentile,
        uncompromising: Agreeableness.children[3].percentile,
        sympathy: Agreeableness.children[4].percentile,
        trust: Agreeableness.children[5].percentile,
      },
    },
    emotionalRange: {
      score: EmotionalRange.percentile,
      factors: {
        fiery: EmotionalRange.children[0].percentile,
        anxiety: EmotionalRange.children[1].percentile,
        melancholy: EmotionalRange.children[2].percentile,
        immoderation: EmotionalRange.children[3].percentile,
        selfConsciousness: EmotionalRange.children[4].percentile,
        vulnerability: EmotionalRange.children[5].percentile,
      },
    },
  };

  return bigFive;
};

module.exports = {
  getBigFive,
};
