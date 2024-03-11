const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, "data.json");

// Middleware для разрешения CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use(express.json());

// GET-сервис, который возвращает данные из JSON
app.get("/api/data", async (req, res) => {
    try {
        const rawData = await fs.readFile(dataFilePath, "utf8");
        const data = JSON.parse(rawData);
        res.json(data);
    } catch (error) {
        console.error("Error reading data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// POST-сервис, который принимает данные и записывает их в JSON
app.post("/api/data", async (req, res) => {
    try {
        const newData = req.body;
        const rawData = await fs.readFile(dataFilePath, "utf8");
        const data = JSON.parse(rawData);

        data.push(newData);

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf8");

        res.json({ message: "Data added successfully", data: newData });
    } catch (error) {
        console.error("Error writing data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET-сервис, который возвращает веб-страницу с фронтовым кодом
app.get("/", (req, res) => {
    // Вам нужно создать веб-страницу с фронтовым кодом и вернуть её
    res.sendFile(path.join(__dirname, "index.html"));
});

// Сервис для получения данных в зависимости от заголовка запроса Accept
app.get("/api/data/format", async (req, res) => {
    try {
        const acceptHeader = req.headers.accept;
        const rawData = await fs.readFile(dataFilePath, "utf8");
        const data = JSON.parse(rawData);

        if (acceptHeader.includes("application/xml")) {
            // Возвращаем данные в формате XML
            res.set('Content-Type', 'application/xml');
            // Здесь может быть логика преобразования данных в XML
            res.send(data);
        } else {
            // По умолчанию возвращаем данные в формате JSON
            res.json(data);
        }
    } catch (error) {
        console.error("Error reading data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
