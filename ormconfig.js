require ("dotenv").config()
module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "seeds":[
      "src/seeds/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}