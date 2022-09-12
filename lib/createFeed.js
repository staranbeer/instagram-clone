import { faker } from "@faker-js/faker";

const createFeed = (count = 8) => {
  const feed = [...Array(count)].map((_, i) => ({
    image: faker.image.abstract(640, 480, true),
  }));

  return feed;
};

export default createFeed;
