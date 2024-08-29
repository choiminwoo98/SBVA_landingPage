const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;

// www.sbvaforum.com에서 접속했을 때의 처리
app.use((req, res, next) => {
  if (req.headers.host === "www.sbvaforum.com") {
    // 이 부분에서 원하는 처리를 할 수 있습니다.
    // 예를 들어, 특정 파일을 보내거나 다른 라우터로 연결 가능
    return res.sendFile(path.join(__dirname, "build", "index.html"));
  }
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`test server started on PORT ${PORT}`);
});
