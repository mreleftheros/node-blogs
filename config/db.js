const { MongoClient } = require("mongodb");

const _dbName = "test";
const _client = new MongoClient(process.env.NODE_ENV === "dev" ? process.env.DB_URI_DEV : process.env.DB_URI);

module.exports = {
  async connect() {
    return await _client.connect();
  },
  getCol(collection) {
    return _client.db(_dbName).collection(collection);
  }
}