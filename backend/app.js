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
        owner: faker.name.findName(),
        cardUri: `http://localhost:3000/${faker.random.number()}.json`,
        name: faker.lorem.words(),
        description: faker.lorem.sentence(),
        image: faker.image.imageUrl(),
      };
    }),
  };
};
