import express from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import routes from "./routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
