import { setSeederFactory } from "typeorm-extension";
import { User } from "../entity/User";

export const UserFactory = setSeederFactory(User, () => {
  const user = new User();

  user.firstName = "yanto";
  user.lastName = "yatno";
  user.age = 2;

  return user;
});
