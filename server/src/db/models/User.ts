import Sequelize from "sequelize";
import { DataSource, DataSourceConfig } from "apollo-datasource";

import { DataBaseStore } from "db";

export class User extends DataSource {
  context: any;
  store: DataBaseStore;

  constructor(store: DataBaseStore) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig<any>) {
    this.context = config.context;
  }

  async findAll() {
    return this.store.users.findAll();
  }

  async findOrCreate({
    where,
    defaults = {}
  }: {
    where: Sequelize.WhereOptions<any>;
    defaults?: any;
  }) {
    return await this.store.users.findOrCreate({ where, defaults });
  }
}
