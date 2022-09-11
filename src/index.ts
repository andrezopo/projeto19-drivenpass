import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers";

dotenv.config();

const app = express();

app.use([cors(), express.json()]);

app.use(router);

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
  console.log(`Look, it's funfing on port ${PORT}`);
});
