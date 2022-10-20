const { MongoClient } = require("mongodb");

const dev = process.env.NODE_ENV === "dev";

const _dbName = dev ? "test" : "main";
const _client = new MongoClient(dev ? process.env.DB_URI_DEV : process.env.DB_URI);

module.exports = {
  async connect() {
    return await _client.connect();
  },
  getCol(collection) {
    return _client.db(_dbName).collection(collection);
  }
}