const { MongoClient, ObjectId } = require("mongodb");

const _dbName = "node-blogs";
const _client = new MongoClient(process.env.DB_URI);

module.exports = {
  async connect() {
    return await _client.connect();
  },
  getCol(col) {
    return _client.db(_dbName).collection(col);
  },
  getId(id) {
    return ObjectId(id);
  }
}