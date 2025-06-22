import { Sequelize, Options } from 'sequelize';
import pg from 'pg';

const user = "postgres";
const password = "test";
const port = 5432;
const newDatabase = "state_registration_deadlines";

const DB_STRING = `postgres://${user}:${password}@localhost:${port}/${newDatabase}`

const options: Options = {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
  dialectOptions: {
    ssl: false,
  },
};

const sequelize = new Sequelize(DB_STRING, options);

export default sequelize;
