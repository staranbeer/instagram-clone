import { faker } from "@faker-js/faker";

const createStories = (count = 10) => {
  const stories = [...Array(count)].map((_, i) => ({
    id: faker.random.alphaNumeric(8),
    userName: faker.name.fullName(),
    userAvatar: faker.image.avatar(),
  }));
  return stories;
};

export default createStories;
