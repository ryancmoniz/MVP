const { getBigFive } = require('../helpers/getBigFive.js');
const { getNeeds } = require('../helpers/getNeeds.js');
const { getValues } = require('../helpers/getValues.js');
const { personality, needs, values } = require('../samples/sampleWatsonData.json').result;


describe('verifying helpers return correct amount traits from API data', () => {
  test('getBigFive should return 5 personality traits', () => {
    expect(Object.keys(getBigFive(personality)).length).toBe(5);
  });

  test('getNeeds should return 12 needs traits', () => {
    expect(Object.keys(getNeeds(needs)).length).toBe(12);
  });

  test('getValues should return 12 needs traits', () => {
    expect(Object.keys(getValues(values)).length).toBe(5);
  });
});

describe('verifying helpers return correct amount traits from API data', () => {
  test('getBigFive should return 5 personality traits', () => {
    expect(Object.keys(getBigFive(personality)).length).toBe(5);
  });

  test('getNeeds should return 12 needs traits', () => {
    expect(Object.keys(getNeeds(needs)).length).toBe(12);
  });

  test('getValues should return 12 needs traits', () => {
    expect(Object.keys(getValues(values)).length).toBe(5);
  });
});
