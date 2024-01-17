import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `\n ☘️  Server running on port ${process.env.PORT || 8000} \n`,
      );
    });
  })
  .catch((error) => {
    console.log("database connection failed !!!! ", error.message);
  });
