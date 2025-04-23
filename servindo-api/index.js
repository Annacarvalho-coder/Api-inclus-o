import express from "express";
import cors from "cors";
import routes from "./routes/accessibilityRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});