const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.json({ status: 'it works!!!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
