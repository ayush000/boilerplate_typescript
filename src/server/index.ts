import * as express from 'express';

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  console.log("a");
  res.send('done');
});
