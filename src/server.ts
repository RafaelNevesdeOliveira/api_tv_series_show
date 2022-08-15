import express from "express";
import { router } from "./routes";
import cors from "cors";
const app = express();
const port = process.env.PORT || 4003
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}` );
});
