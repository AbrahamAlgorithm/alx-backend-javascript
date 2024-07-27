const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

