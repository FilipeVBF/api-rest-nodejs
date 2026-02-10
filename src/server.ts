import { app } from "./app.js";
import { env } from "./env/index.js";

app
  .listen({
    port: env.PORT,
    ...(env.HOST ? { host: env.HOST } : {}),
  })
  .then(() => {
    console.log("HTTP Server Running! Port: ", env.PORT);
    console.log("ENV HOST:", env.HOST);
  });
