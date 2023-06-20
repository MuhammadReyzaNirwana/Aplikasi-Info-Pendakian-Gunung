const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bos' }
  ];
  res.json(users);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});