const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello ${name}` });
});

app.listen(3000, () => console.log('Server running on port 3000'));