import express from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import routes from "./routes";
import { swaggerUi, swaggerSpec } from "./swagger";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a documentação http://localhost:${PORT}/api-docs`);
});
