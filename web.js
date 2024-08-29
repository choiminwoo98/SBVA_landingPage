const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;

// 특정 URL (예: sbvaforum.com) 처리 미들웨어
app.use((req, res, next) => {
  if (req.headers.host === "www.sbvaforum.com") {
    // 여기서 특정 처리를 합니다. 예를 들어, 비-www로 리다이렉트:
    const newHost = "sbvaforum.com";
    return res.redirect(301, req.protocol + "://" + newHost + req.originalUrl);
  }
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`test server started on PORT ${PORT}`);
});
