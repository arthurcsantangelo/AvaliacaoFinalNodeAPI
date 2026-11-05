import { Sequelize } from 'sequelize'


class Database {
  constructor() {
    this.init()
  }
      
  init() {
    this.db = new Sequelize({
        dialect: 'postgres',
        database: 'exemplo_8y46',
        username: 'exemplo_8y46_user',
        password: 'b82D3GsN9e6VLRnpnZZf7w8c1PEoEMSj',
        host: 'dpg-dbh78su7bikc73ff8930-a.oregon-postgres.render.com',
        dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  }
}

export default new Database()