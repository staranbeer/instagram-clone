import { faker } from "@faker-js/faker";

const createPosts = (count = 10) => {
  const posts = [...Array(count)].map((_, i) => ({
    id: faker.random.alphaNumeric(8),
    likes: faker.random.numeric(2),
    userName: faker.name.fullName(),
    userAvatar: faker.image.avatar(),
    image: faker.image.image(),
    caption: faker.random.words(5),
    posted: faker.random.numeric(1),
  }));

  return posts;
};

export default createPosts;
