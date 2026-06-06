const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.post('/webhook', (req, res) => {
  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  const response = new MessagingResponse();
  response.message('Cardio Ginesio Bot is live!');
  res.type('text/xml').send(response.toString());
});

app.get('/', (req, res) => {
  res.send('Bot is running ✅');
});

app.listen(port, () => {
  console.log(`Bot listening on port ${port}`);
});
