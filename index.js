require("dotenv").config();
const { connect, getCol } = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000;

connect()
  .then(() => {
    console.log("Connected to the database.");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  })
  .catch(err => {
    console.log(err.message);
    process.exit(1);
  })
