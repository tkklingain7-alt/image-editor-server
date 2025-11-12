const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt nhận:", prompt);
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // thêm key của bạn trong Render Environment
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt nhận:", prompt);

    const result = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024", // có thể đổi thành 1792x1024, 4K...
    });

    res.json({ url: result.data[0].url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi tạo ảnh" });
  }
});

app.get("/", (req, res) => res.send("✅ Image API đang hoạt động!"));
const PORT = process.env.PORT || 10002;
app.listen(PORT, () => console.log(`🚀 Server chạy tại cổng ${PORT}`));

   
    res.json({ url: fakeImage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi tạo ảnh" });
  }
});

app.get("/", (req, res) => {
  res.send("✅ Image API đang hoạt động!");
});

// --- Chỉ giữ 1 đoạn listen duy nhất ---
const PORT = process.env.PORT || 10002;

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại cổng ${PORT}`);
}).on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Cổng ${PORT} đã được sử dụng. Thử cổng khác...`);
  } else {
    console.error(err);
  }
});
