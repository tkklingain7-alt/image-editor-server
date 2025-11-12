import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));

// API test
app.get("/", (req, res) => {
  res.send("🚀 Image Editor Server is running!");
});

// API xử lý ảnh mẫu
app.post("/enhance", async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.status(400).json({ error: "No image provided" });

    // Giả lập xử lý ảnh (sẽ thêm AI sau)
    res.json({ success: true, url: image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error enhancing image" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
