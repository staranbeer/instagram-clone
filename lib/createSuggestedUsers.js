import { faker } from "@faker-js/faker";

const createSuggestedUsers = (count = 5) => {
  const suggestedUsers = [...Array(count)].map((_, i) => ({
    id: faker.random.alphaNumeric(8),
    userName: faker.name.fullName(),
    userAvatar: faker.image.avatar(),
  }));
  return suggestedUsers;
};

export default createSuggestedUsers;
