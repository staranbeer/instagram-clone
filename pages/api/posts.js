import { faker } from "@faker-js/faker";
export default function (req, res) {
  const count = req.query.count || 10;
  const posts = [...Array(count)].map((_, i) => ({
    id: faker.random.alphaNumeric(8),
    likes: faker.random.numeric(2),
    userName: faker.name.fullName(),
    userAvatar: faker.image.avatar(),
    image: faker.image.image(),
    caption: faker.random.words(5),
    posted: faker.random.numeric(1),
  }));
  res.status(200).json(JSON.stringify(posts));
}
