import Sequelize from "sequelize";

const defUser = (db: Sequelize.Sequelize) =>
  db.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });

export const getDB = async () => {
  const Op = Sequelize.Op;
  const operatorsAliases = {
    $in: Op.in
  };

  const db = new Sequelize("", "", "", {
    dialect: "sqlite",
    storage: "./db.sqlite",
    operatorsAliases,
    logging: false
  });
  const users = defUser(db);

  return { users };
};
export type Users = ReturnType<typeof defUser>;
export type DataBaseStore = ReturnType<typeof getDB> & {
  users: Users;
};
