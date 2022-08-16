import { faker } from "@faker-js/faker";
export default function (req, res) {
  const count = req.query.count || 10;
  const stories = [...Array(count)].map((_, i) => ({
    id: faker.random.alphaNumeric(8),
    userName: faker.name.fullName(),
    userAvatar: faker.image.avatar(),
  }));
  res.status(200).json(JSON.stringify(stories));
}
