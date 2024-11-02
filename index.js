const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Pham Minh Thuan - My first Node.js app on Heroku');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
