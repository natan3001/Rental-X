import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "172.17.0.1",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
