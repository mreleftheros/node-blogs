const { MongoClient, ObjectId } = require("mongodb");

const dev = process.env.NODE_ENV === "dev";

const _dbName = dev ? "test" : "projects";
const _colName = "blogs";
const _client = new MongoClient(dev ? process.env.DB_URI_DEV : process.env.DB_URI);

module.exports = {
  async connect() {
    return await _client.connect();
  },
  getCol() {
    return _client.db(_dbName).collection(_colName);
  },
  getId(id) {
    return ObjectId(id);
  }
}