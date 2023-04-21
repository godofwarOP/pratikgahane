import Express from "express";
import { PORT } from "./config/config.js";
import connectDb from "./database/db.js";
import { Response } from "./handlers/response.js";
import { Controller_GetAdsByKeyword } from "./controllers/ads.js";

const app = Express();

// connect database
await connectDb();

// register middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

// register default route
app.get("/", (req, res) => {
  const uptime = Math.floor(process.uptime());

  res.status(200).json(
    new Response({
      status: "OK",
      uptimeSec: uptime,
    })
  );
});

// register route
app.get("/ads/:keyword", Controller_GetAdsByKeyword);

// register error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const errorMessage = err.message ? err.message : "Something went wrong";

  res.status(statusCode).json(
    new Response(null, {
      message: errorMessage,
    })
  );
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
