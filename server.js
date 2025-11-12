// server.js — CommonJS version (chạy ổn định Render + Node 22)

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔸 Cấu hình OpenAI key (Render → Environment → Add "OPENAI_API_KEY")
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Route test đơn giản
app.get("/", (req, res) => {
  res.send("✅ Server AI Image Generator đang hoạt động!");
});

// ✅ Route tạo ảnh từ văn bản
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("📩 Prompt nhận:", prompt);

    // Nếu không có prompt thì báo lỗi
    if (!prompt) {
      return res.status(400).json({ error: "Thiếu prompt!" });
    }

    // 🔹 Gọi OpenAI tạo ảnh (4 ảnh chất lượng cao)
    const result = await client.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      n: 4,
      size: "1024x1024"
    });

    // 🔹 Trả danh sách link ảnh
    const imageUrls = result.data.map((img) => img.url);
    res.json({ images: imageUrls });
  } catch (error) {
    console.error("❌ Lỗi /generate:", error);
    res.status(500).json({ error: "Không thể tạo ảnh!" });
  }
});

// ✅ Khởi động server
const PORT = process.env.PORT || 10002;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại cổng ${PORT}`);
});
