import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
