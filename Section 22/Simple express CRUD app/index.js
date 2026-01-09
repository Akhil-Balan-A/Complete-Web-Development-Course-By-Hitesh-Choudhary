import express from "express";
import morgan from "morgan";
import logger from "./logger.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const morganFormat =
  ":method :url :status :res[content-length] - :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

let teaData = [];

let nextId = 1;

app.post("/api/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(201).json(newTea);
});

app.get("/api/get-teas", (req, res) => {
  if (!teaData.length) {
    return res.status(404).json({ error: "No teas found" });
  }
  res.json(teaData);
});

app.get("/api/get-tea/:id", (req, res) => {
  const id = Number(req.params.id);
  const tea = teaData.find((tea) => {
    return tea.id === id;
  });
  if (!tea) {
    return res.status(404).json({ error: "Tea not found" });
  }
  res.json(tea);
});

app.put("/api/update-tea/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, price } = req.body;

  const tea = teaData.find((tea) => {
    return tea.id === id;
  });
  if (!tea) {
    return res.status(404).json({ error: "Tea not found" });
  }
  // IF the used given name or not or price or not accordingly update.
  if (name) {
    tea.name = name;
  }
  if (price) {
    tea.price = price;
  }

  res.status(200).json({ message: "Tea updated successfully", tea });
});

app.delete("/api/delete-tea/:id", (req, res) => {
  const id = Number(req.params.id);
  const teaIndex = teaData.findIndex((tea) => {
    return tea.id === id;
  });
  if (teaIndex === -1) {
    return res.status(404).json({ error: "Tea not found" });
  }
  teaData.splice(teaIndex, 1);

  return res.status(200).json({ message: "Tea deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
