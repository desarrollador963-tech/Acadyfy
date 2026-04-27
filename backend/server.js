const express = require("express");
const cors = require("cors");

const syllabusRoutes = require("./routes/syllabus.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/syllabus", syllabusRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});