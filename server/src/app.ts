import "reflect-metadata";
import * as express from "express";
import { Request, Response } from "express";
import { dataSource } from "./data-source";
import { User } from "./entity/User";

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch(err => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json());

app.get("/users", async function (req: Request, res: Response) {
  const users = await dataSource.getRepository(User).find();
  res.json(users);
});

app.get("/", (req: Request, res: Response) => {
  res.send("nah ini bisa, kontol, kok tadi enggak");
});

app.listen(3000, () => {
  console.log("bah");
});
