import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notes.js";

dotenv.config();
const app = express();

app.use(express.json());
// notes router
app.use("/notes", notesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
