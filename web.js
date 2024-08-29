const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;

// www 접속을 비-www로 리다이렉트하는 미들웨어
app.use((req, res, next) => {
  if (req.headers.host.slice(0, 4) === "www.") {
    const newHost = req.headers.host.slice(4);
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
