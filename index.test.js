const getRandomNumber = require('./index.js');

test('Le nombre généré est un entier entre 0 et 100', () => {
  const randomNumber = getRandomNumber();
  expect(randomNumber).toBeGreaterThanOrEqual(0);
  expect(randomNumber).toBeLessThanOrEqual(100);
});