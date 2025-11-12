import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("Prompt nhận:", prompt);

    // Dòng dưới chỉ là giả lập kết quả demo — bạn có thể thay bằng API AI thực
    const fakeImage = `https://placehold.co/600x400?text=${encodeURIComponent(prompt)}`;

    res.json({ url: fakeImage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi tạo ảnh" });
  }
});

app.get("/", (req, res) => {
  res.send("✅ Image API đang hoạt động!");
});
const PORT = process.env.PORT || 10002;
app.listen(PORT, () => console.log(`🚀 Server đang chạy tại cổng ${PORT}`));

const port = process.env.PORT || 10002;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
const PORT = process.env.PORT || 10002;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại cổng ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Cổng ${PORT} đã được sử dụng. Thử cổng khác...`);
  } else {
    console.error(err);
  }
});
