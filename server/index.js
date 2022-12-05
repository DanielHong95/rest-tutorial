const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

try {
  app.listen(process.env.EXTERNAL_PORT || 3001);
} catch (error) {
  console.error(error);
}
