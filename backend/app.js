module.exports = function () {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    friend: _.times(10, function (n) {
      return {
        id: n,
        name: faker.internet.userName(),
        imageUrl: faker.image.people(),
      };
    }),
    token: _.times(10, function (n) {
      return {
        tokenId: n,
        imageUrl: faker.image.animals(),
        balance: faker.random.number(),
      };
    }),
    card: _.times(10, function (n) {
      return {
        cardId: n,
        owner: faker.
      };
    }),
  };
};
