const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelizeConnection = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

export async function testConnect(){
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 };

 export async function name() {
     try{
         await sequelizeConnection.close()
         console.log("connection to database closed successfully. ");
     } catch (error) {
        console.error('Unable to close connection to the database:', error);
      }
 }
