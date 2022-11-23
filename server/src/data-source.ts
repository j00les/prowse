// import { DataSource } from "typeorm";
import { User } from "./entity/User";

// export const dataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "postgres",
//   database: "prowse",
//   synchronize: true,
//   logging: false,
//   entities: [User],
//   migrations: [],
//   subscribers: [],
// });

import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { UserFactory } from "./seeders/users.factory";
import UserSeeder from "./seeders/user.seeder";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  username: "postgres",
  password: "postgres",
  database: "prowse",

  seeds: [UserSeeder],
  factories: [UserFactory],
  entities: [User],
};

export const dataSource = new DataSource(options);
