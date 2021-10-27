require("dotenv").config();
const mongoose = require("mongoose");
const DatabaseURI: string | undefined = process.env.DATABASE_URI;

export default class DBConnection {
  private static Instance: DBConnection | null = null;

  private constructor() {
    mongoose
      .connect(DatabaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("conected to mongoDB..."))
      .catch((error: Error) => console.log("Failed to connect to DB"));
  }

  static Activate() {
    if (DBConnection.Instance === null) {
      DBConnection.Instance = new DBConnection();
    }
    return DBConnection.Instance;
  }
}
